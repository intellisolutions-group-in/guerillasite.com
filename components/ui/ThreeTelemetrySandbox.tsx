"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface NodeData {
  name: string;
  role: string;
  status: string;
  metric: string;
  metricLabel: string;
  color: string;
}

const nodeDataList: Record<string, NodeData> = {
  INGRESS_LB: {
    name: "INGRESS_LB",
    role: "Central Ingress Load Balancer",
    status: "Healthy / Active",
    metric: "12,480 Req/sec",
    metricLabel: "Traffic Throughput",
    color: "text-secondary border-secondary/20 bg-secondary/5",
  },
  REPLICA_01: {
    name: "REPLICA_01",
    role: "Database Core Replica (Read/Write)",
    status: "Active Sync",
    metric: "1.2ms Response",
    metricLabel: "Average Latency",
    color: "text-secondary border-secondary/20 bg-secondary/5",
  },
  REPLICA_02: {
    name: "REPLICA_02",
    role: "Database Cache Node (Redis Sync)",
    status: "Active Sync",
    metric: "0.8ms Response",
    metricLabel: "Average Latency",
    color: "text-[#D8E63C] border-[#D8E63C]/25 bg-[#D8E63C]/5",
  },
  REPLICA_03: {
    name: "REPLICA_03",
    role: "Database Analytics Replica (Cold Storage)",
    status: "Healthy",
    metric: "1.4ms Response",
    metricLabel: "Average Latency",
    color: "text-[#D3DDE7] border-[#D3DDE7]/20 bg-[#D3DDE7]/5",
  },
};

export default function ThreeTelemetrySandbox() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<NodeData | null>(nodeDataList.INGRESS_LB);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 300;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 15;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold the entire system for rotation
    const systemGroup = new THREE.Group();
    scene.add(systemGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5, 30);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Nodes creation helpers
    const nodes: Record<string, THREE.Mesh> = {};
    const nodeMeshes: THREE.Object3D[] = [];

    const createNode = (name: string, pos: THREE.Vector3, size: number, color: number) => {
      // Core sphere
      const sphereGeom = new THREE.SphereGeometry(size, 32, 32);
      const sphereMat = new THREE.MeshPhongMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.35,
        shininess: 30,
        transparent: true,
        opacity: 0.9,
      });
      const mesh = new THREE.Mesh(sphereGeom, sphereMat);
      mesh.position.copy(pos);
      mesh.name = name;

      // Outer wireframe orbit ring for aesthetic details
      const ringGeom = new THREE.SphereGeometry(size * 1.35, 10, 10);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      mesh.add(ringMesh);

      systemGroup.add(mesh);
      nodes[name] = mesh;
      nodeMeshes.push(mesh);
    };

    // Instantiate Ingress LB and DB replicas
    createNode("INGRESS_LB", new THREE.Vector3(-4, 0, 0), 0.95, 0xd8e63c);
    createNode("REPLICA_01", new THREE.Vector3(4, 3, 0.5), 0.65, 0xd8e63c);
    createNode("REPLICA_02", new THREE.Vector3(4.5, 0, -1), 0.65, 0xd8e63c);
    createNode("REPLICA_03", new THREE.Vector3(4, -3, 1), 0.65, 0xd3dde7);

    // Flow Paths (Bezier Curves)
    const createCurve = (start: THREE.Vector3, end: THREE.Vector3, ctrl: THREE.Vector3) => {
      return new THREE.QuadraticBezierCurve3(start, ctrl, end);
    };

    const curves = [
      createCurve(nodes.INGRESS_LB.position, nodes.REPLICA_01.position, new THREE.Vector3(-0.5, 2.5, 1)),
      createCurve(nodes.INGRESS_LB.position, nodes.REPLICA_02.position, new THREE.Vector3(-0.5, 0, -2.5)),
      createCurve(nodes.INGRESS_LB.position, nodes.REPLICA_03.position, new THREE.Vector3(-0.5, -2.5, 1)),
    ];

    // Render wireframe tubes along paths
    const tubeMat = new THREE.MeshBasicMaterial({
      color: 0x333333,
      transparent: true,
      opacity: 0.1,
      wireframe: true,
    });

    curves.forEach((curve) => {
      const tubeGeom = new THREE.TubeGeometry(curve, 32, 0.05, 8, false);
      const tube = new THREE.Mesh(tubeGeom, tubeMat);
      systemGroup.add(tube);
    });

    // Packet Particles
    interface Packet {
      mesh: THREE.Mesh;
      curve: THREE.QuadraticBezierCurve3;
      speed: number;
      t: number;
    }

    const packets: Packet[] = [];
    const colors = [0xd8e63c, 0xd8e63c, 0xd3dde7];

    const createPacket = (curveIdx: number, offsetT: number) => {
      const geom = new THREE.SphereGeometry(0.12, 16, 16);
      const mat = new THREE.MeshBasicMaterial({
        color: colors[curveIdx],
        transparent: true,
        opacity: 0.9,
      });
      const mesh = new THREE.Mesh(geom, mat);
      systemGroup.add(mesh);

      packets.push({
        mesh,
        curve: curves[curveIdx],
        speed: 0.008 + Math.random() * 0.006,
        t: offsetT,
      });
    };

    // Populate flow paths with multiple packets
    for (let i = 0; i < 3; i++) {
      createPacket(i, 0.0);
      createPacket(i, 0.33);
      createPacket(i, 0.66);
    }

    // Interactive Drag Orbit setup
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      // 1. Drag orbit calculation
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        systemGroup.rotation.y += deltaX * 0.005;
        systemGroup.rotation.x += deltaY * 0.005;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }

      // 2. Raycaster hover check
      const rect = container.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(nodeMeshes);

      // Reset scales and cursor
      container.style.cursor = isDragging ? "grabbing" : "default";
      nodeMeshes.forEach((mesh) => {
        mesh.scale.set(1, 1, 1);
      });

      if (intersects.length > 0) {
        const hoveredObj = intersects[0].object as THREE.Mesh;
        hoveredObj.scale.set(1.2, 1.2, 1.2);
        if (!isDragging) container.style.cursor = "pointer";

        // Update React state
        const targetData = nodeDataList[hoveredObj.name];
        if (targetData) {
          setHoveredNode(targetData);
        }
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Set up IntersectionObserver to pause rendering when out of viewport
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Skip computational packet loops, rotations, and WebGL renders if hidden
      if (!isVisible) return;

      // Rotate nodes internal wireframes
      nodeMeshes.forEach((node) => {
        if (node.children[0]) {
          node.children[0].rotation.y += 0.01;
          node.children[0].rotation.x += 0.005;
        }
      });

      // Animate packet paths
      packets.forEach((packet) => {
        packet.t += packet.speed;
        if (packet.t > 1.0) {
          packet.t = 0.0;
        }
        packet.mesh.position.copy(packet.curve.getPointAt(packet.t));
      });

      // Ambient idle rotation of system Group when not dragging
      if (!isDragging) {
        systemGroup.rotation.y += 0.0015;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full flex-grow relative min-h-[340px] flex items-center justify-center">
      {/* 3D WebGL Target Div */}
      <div 
        ref={containerRef} 
        className="w-full h-full min-h-[340px] absolute inset-0 z-0 bg-neutral-900/60 backdrop-blur-md rounded-[4px] border border-neutral-800/80 overflow-hidden shadow-inner cursor-grab active:cursor-grabbing" 
      />

      {/* Floating Diagnostics Glassmorphic Tooltip */}
      {hoveredNode && (
        <div className="absolute top-4 left-4 z-10 bg-black/75 backdrop-blur-md border border-neutral-800 p-4 rounded-[4px] shadow-lg max-w-[280px] pointer-events-none flex flex-col gap-xs transition-opacity duration-300">
          <div className="flex justify-between items-center border-b border-neutral-850 pb-sm mb-xs">
            <span className="font-mono text-[9px] text-neutral-450 uppercase font-extrabold">Node Diagnostics</span>
            <span className={`font-sans text-[8px] border px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${hoveredNode.color}`}>
              {hoveredNode.status}
            </span>
          </div>
          <h4 className="font-display text-sm font-bold uppercase text-white tracking-wide">{hoveredNode.name}</h4>
          <p className="font-sans text-[10px] text-neutral-400 leading-tight mb-xs">{hoveredNode.role}</p>
          <div className="flex justify-between items-end mt-sm pt-xs border-t border-neutral-850">
            <span className="font-sans text-[8px] text-neutral-450 uppercase tracking-widest">{hoveredNode.metricLabel}</span>
            <span className="font-mono text-xs font-bold text-secondary">{hoveredNode.metric}</span>
          </div>
        </div>
      )}

      {/* Floating Helper Tip */}
      <div className="absolute bottom-4 right-4 z-10 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800/50 px-3 py-1.5 rounded-full shadow-md text-center pointer-events-none">
        <span className="font-sans text-[9px] text-neutral-450 uppercase tracking-wider font-semibold flex items-center gap-1.5 justify-center">
          <span className="material-symbols-outlined text-xs">open_in_full</span>
          Drag to rotate space & hover nodes
        </span>
      </div>
    </div>
  );
}
