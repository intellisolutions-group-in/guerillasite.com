"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHeroBg() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 700;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Geometry - Torus Knot for fluid organic look (optimized density for performance)
    const geom = new THREE.TorusKnotGeometry(2.5, 0.7, 100, 16);
    
    // Shared uniforms for GPU vertex displacement
    const customUniforms = {
      uTime: { value: 0 },
      uAmplitude: { value: 0.22 },
    };

    const applyGPUDisplacement = (material: THREE.Material) => {
      material.onBeforeCompile = (shader) => {
        // Share uniforms with compilation shader
        shader.uniforms.uTime = customUniforms.uTime;
        shader.uniforms.uAmplitude = customUniforms.uAmplitude;

        shader.vertexShader = `
          uniform float uTime;
          uniform float uAmplitude;
        ` + shader.vertexShader;

        shader.vertexShader = shader.vertexShader.replace(
          "#include <begin_vertex>",
          `
            #include <begin_vertex>
            // GPU-based dynamic liquid displacement along normal vectors
            float displacement = sin(transformed.x * 0.6 + uTime * 1.2) * 
                                 cos(transformed.y * 0.6 + uTime * 1.0) * 
                                 sin(transformed.z * 0.4 + uTime * 0.8) * uAmplitude;
            transformed += normal * displacement;
          `
        );
      };
    };

    // Group to hold all 3D mesh components
    const meshGroup = new THREE.Group();
    scene.add(meshGroup);

    // Materials mapping to brand colors
    // 1. Solid reflective glass body (Light Violet refracting base)
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xd8e63c,
      transmission: 0.8, // Slightly lower than 0.85 for faster single-pass rendering bounds
      opacity: 0.95,
      roughness: 0.15,
      metalness: 0.05,
      ior: 1.45,
      thickness: 1.5,
      specularIntensity: 0.8,
      specularColor: new THREE.Color(0xffffff),
      side: THREE.DoubleSide,
      transparent: true,
    });
    applyGPUDisplacement(glassMaterial);
    const solidMesh = new THREE.Mesh(geom, glassMaterial);
    meshGroup.add(solidMesh);

    // 2. Wireframe layer (Nordic Breeze)
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xd3dde7,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
    });
    applyGPUDisplacement(wireframeMaterial);
    const wireframeMesh = new THREE.Mesh(geom, wireframeMaterial);
    meshGroup.add(wireframeMesh);

    // 3. Vertex particle dots (Tetsu-kon Blue & Duranta Yellow blend)
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x17184b,
      size: 0.08,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });
    applyGPUDisplacement(pointsMaterial);
    const vertexPoints = new THREE.Points(geom, pointsMaterial);
    meshGroup.add(vertexPoints);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Dynamic point lights matching the brand palette
    const light1 = new THREE.PointLight(0xd8e63c, 12, 50); // Duranta Yellow
    light1.position.set(10, 10, 10);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xd8e63c, 10, 50); // Light Violet
    light2.position.set(-10, -10, 8);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xd3dde7, 8, 30); // Nordic Breeze
    light3.position.set(0, 5, -5);
    scene.add(light3);

    // IntersectionObserver to pause rendering when canvas is out of the viewport
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(container);

    // Animation & Interaction variables (using high-res performance timestamps to clear THREE.Clock deprecation)
    let lastTime = performance.now();
    let accumulatedTime = 0;
    let totalElapsedTime = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 700;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Keep total timeline progressing smoothly even when paused to prevent rotational jumping
      totalElapsedTime += delta;

      // Skip GPU operations, uniform updates, and drawing passes if out of viewport
      if (!isVisible) return;

      // Calculate dynamic morph speed based on mouse steering
      const mouseSpeedMultiplier = 1.0 + Math.sqrt(mouseX * mouseX + mouseY * mouseY) * 1.5;
      accumulatedTime += delta * mouseSpeedMultiplier;

      // Update GPU uniforms directly
      customUniforms.uTime.value = accumulatedTime;
      customUniforms.uAmplitude.value = 0.22 + (scrollY * 0.0001);

      // Slow mesh rotations
      meshGroup.rotation.y = totalElapsedTime * 0.15 + (scrollY * 0.001);
      meshGroup.rotation.x = totalElapsedTime * 0.1;

      // Pulse floating point lights
      light1.position.x = Math.sin(totalElapsedTime * 0.8) * 12;
      light1.position.y = Math.cos(totalElapsedTime * 0.5) * 12;
      light2.position.x = -Math.cos(totalElapsedTime * 0.6) * 12;
      light2.position.y = -Math.sin(totalElapsedTime * 0.7) * 12;

      // Camera mouse lag/damping
      targetX = mouseX * 2.5;
      targetY = mouseY * 2.5;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Render scene
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geom.dispose();
      glassMaterial.dispose();
      wireframeMaterial.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
    />
  );
}
