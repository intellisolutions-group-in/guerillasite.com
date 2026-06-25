"use client";

import React, { useEffect, useState } from "react";

export default function TelemetrySimulator2D() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [ingressCount, setIngressCount] = useState(14820);
  const [latencies, setLatencies] = useState([1.2, 1.4, 0.9]);

  // Simulate updating telemetry counters
  useEffect(() => {
    const interval = setInterval(() => {
      setIngressCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
      setLatencies([
        parseFloat((1.0 + Math.sin(Date.now() / 1500) * 0.2 + Math.random() * 0.1).toFixed(2)),
        parseFloat((1.3 + Math.cos(Date.now() / 2000) * 0.15 + Math.random() * 0.1).toFixed(2)),
        parseFloat((0.8 + Math.sin(Date.now() / 1000) * 0.1 + Math.random() * 0.05).toFixed(2)),
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-6 bg-black/40 border border-white/10 rounded-[32px] p-6 relative overflow-hidden flex flex-col gap-6 select-none shadow-inner">
      {/* Decorative scanline grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      {/* Simulator Vector Canvas */}
      <div className="w-full h-[180px] relative z-10">
        <svg viewBox="0 0 500 180" className="w-full h-full">
          {/* Gradients */}
          <defs>
            <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D8E63C" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D8E63C" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D8E63C" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D3DDE7" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D8E63C" />
              <stop offset="50%" stopColor="#D3DDE7" />
              <stop offset="100%" stopColor="#D8E63C" />
            </linearGradient>
          </defs>

          {/* Network Connection Pipes (Bezier Curves) */}
          <path
            d="M 80 90 Q 240 30 400 35"
            fill="none"
            stroke="url(#yellowGrad)"
            strokeWidth="2.5"
            className="opacity-40"
          />
          <path
            d="M 80 90 Q 240 90 400 90"
            fill="none"
            stroke="url(#blueGrad)"
            strokeWidth="2.5"
            className="opacity-40"
          />
          <path
            d="M 80 90 Q 240 150 400 145"
            fill="none"
            stroke="url(#yellowGrad)"
            strokeWidth="2.5"
            className="opacity-40"
          />

          {/* Animated Flowing Data Packets */}
          <circle r="4" fill="#D8E63C" className="shadow-[0_0_8px_#D8E63C]">
            <animateMotion
              path="M 80 90 Q 240 30 400 35"
              begin="0s"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="4" fill="#D3DDE7" className="shadow-[0_0_8px_#D3DDE7]">
            <animateMotion
              path="M 80 90 Q 240 90 400 90"
              begin="0.8s"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="4" fill="#D8E63C" className="shadow-[0_0_8px_#D8E63C]">
            <animateMotion
              path="M 80 90 Q 240 150 400 145"
              begin="0.4s"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="4" fill="#D8E63C" className="shadow-[0_0_8px_#D8E63C]">
            <animateMotion
              path="M 80 90 Q 240 30 400 35"
              begin="1.2s"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="4" fill="#D8E63C" className="shadow-[0_0_8px_#D8E63C]">
            <animateMotion
              path="M 80 90 Q 240 150 400 145"
              begin="1.8s"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Node 1: Ingress Load Balancer (Left) */}
          <g 
            className="cursor-pointer"
            onMouseEnter={() => setActiveNode(0)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle
              cx="80"
              cy="90"
              r="22"
              fill="#121212"
              stroke="#D8E63C"
              strokeWidth="2"
              className="transition-all duration-300"
            />
            <circle
              cx="80"
              cy="90"
              r={activeNode === 0 ? "14" : "10"}
              fill="#D8E63C"
              className="transition-all duration-300 opacity-80"
            />
            <text x="80" y="94" textAnchor="middle" fill="#121212" fontSize="9" fontWeight="bold" fontFamily="monospace">LB</text>
          </g>

          {/* Node 2: Replica 01 (Right Top) */}
          <g 
            className="cursor-pointer"
            onMouseEnter={() => setActiveNode(1)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle
              cx="400"
              cy="35"
              r="18"
              fill="#121212"
              stroke={activeNode === 1 ? "#D8E63C" : "#D8E63C"}
              strokeWidth="2"
              className="transition-all duration-300"
            />
            <circle cx="400" cy="35" r="7" fill={activeNode === 1 ? "#D8E63C" : "#D8E63C"} className="opacity-80 transition-all duration-300" />
            <text x="430" y="38" fill="#D8E63C" fontSize="8" fontWeight="bold" fontFamily="monospace">REP_01</text>
          </g>

          {/* Node 3: Replica 02 (Right Middle) */}
          <g 
            className="cursor-pointer"
            onMouseEnter={() => setActiveNode(2)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle
              cx="400"
              cy="90"
              r="18"
              fill="#121212"
              stroke={activeNode === 2 ? "#D8E63C" : "#D8E63C"}
              strokeWidth="2"
              className="transition-all duration-300"
            />
            <circle cx="400" cy="90" r="7" fill={activeNode === 2 ? "#D8E63C" : "#D8E63C"} className="opacity-80 transition-all duration-300" />
            <text x="430" y="93" fill="#D8E63C" fontSize="8" fontWeight="bold" fontFamily="monospace">REP_02</text>
          </g>

          {/* Node 4: Replica 03 (Right Bottom) */}
          <g 
            className="cursor-pointer"
            onMouseEnter={() => setActiveNode(3)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle
              cx="400"
              cy="145"
              r="18"
              fill="#121212"
              stroke={activeNode === 3 ? "#D8E63C" : "#D3DDE7"}
              strokeWidth="2"
              className="transition-all duration-300"
            />
            <circle cx="400" cy="145" r="7" fill={activeNode === 3 ? "#D8E63C" : "#D3DDE7"} className="opacity-80 transition-all duration-300" />
            <text x="430" y="148" fill="#D3DDE7" fontSize="8" fontWeight="bold" fontFamily="monospace">REP_03</text>
          </g>
        </svg>
      </div>

      {/* Simulator Realtime Telemetry Grid Overlay */}
      <div className="grid grid-cols-3 gap-md border-t border-white/5 pt-4 z-10">
        <div className="flex flex-col">
          <span className="font-mono text-[9px] text-neutral-450 uppercase tracking-wider">Ingress Packets</span>
          <span className="font-mono text-sm font-extrabold text-[#D8E63C]">{ingressCount.toLocaleString()}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-[9px] text-neutral-450 uppercase tracking-wider">Active Balancing</span>
          <span className="font-mono text-sm font-extrabold text-white">Dynamic (WRR)</span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-[9px] text-neutral-450 uppercase tracking-wider">Latency Mesh</span>
          <span className="font-mono text-xs text-[#D3DDE7] font-semibold">
            {latencies[0]}ms | {latencies[1]}ms | {latencies[2]}ms
          </span>
        </div>
      </div>
    </div>
  );
}
