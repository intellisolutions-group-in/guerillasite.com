"use client";

import React, { useState, useEffect, useRef } from "react";

const HERO_VIDEOS = [
  "/videos/6900344-hd_1080_1920_25fps.mp4",
  "/videos/7017763-uhd_2160_3840_24fps.mp4",
  "/videos/7236938-uhd_2160_3840_24fps.mp4",
  "/videos/7241006-uhd_2160_3840_24fps.mp4",
  "/videos/7652958-hd_1080_1920_25fps.mp4",
  "/videos/7679434-uhd_2160_4096_25fps.mp4",
  "/videos/7774737-uhd_2160_3840_30fps.mp4",
  "/videos/7824433-uhd_2160_3840_30fps.mp4",
  "/videos/8059188-uhd_2160_4096_25fps.mp4",
  "/videos/8373727-hd_1080_1920_25fps.mp4",
  "/videos/8906755-hd_1080_1920_25fps.mp4",
];

interface VideoColumnProps {
  initialVideo: string;
  allVideos: string[];
  inView: boolean;
  isColHidden?: boolean;
}

function VideoColumn({ initialVideo, allVideos, inView, isColHidden = false }: VideoColumnProps) {
  const [videoA, setVideoA] = useState(initialVideo);
  const [videoB, setVideoB] = useState(() => {
    const remaining = allVideos.filter((v) => v !== initialVideo);
    return remaining[Math.floor(Math.random() * remaining.length)];
  });
  const [activePlayer, setActivePlayer] = useState<"A" | "B">("A");

  const playerARef = useRef<HTMLVideoElement>(null);
  const playerBRef = useRef<HTMLVideoElement>(null);

  // Handle crossfade when the active video finishes
  const handleEnded = () => {
    if (activePlayer === "A") {
      setActivePlayer("B");
      if (playerBRef.current && inView && !isColHidden) {
        playerBRef.current.play().catch((err) => {
          console.warn("Standby player B failed to play:", err);
        });
      }
      const nextForA = allVideos.filter((v) => v !== videoB);
      const randSrc = nextForA[Math.floor(Math.random() * nextForA.length)];
      setVideoA(randSrc);
    } else {
      setActivePlayer("A");
      if (playerARef.current && inView && !isColHidden) {
        playerARef.current.play().catch((err) => {
          console.warn("Standby player A failed to play:", err);
        });
      }
      const nextForB = allVideos.filter((v) => v !== videoA);
      const randSrc = nextForB[Math.floor(Math.random() * nextForB.length)];
      setVideoB(randSrc);
    }
  };

  // Play/pause the active player based on viewport visibility and column rendering
  useEffect(() => {
    const active = activePlayer === "A" ? playerARef.current : playerBRef.current;
    const inactive = activePlayer === "A" ? playerBRef.current : playerARef.current;

    // The standby player must always remain paused to free hardware decoding units
    if (inactive) {
      inactive.pause();
    }

    if (active) {
      if (inView && !isColHidden) {
        active.play().catch((err) => {
          console.debug("Video playback failed/interrupted on state update:", err);
        });
      } else {
        active.pause();
      }
    }
  }, [activePlayer, inView, isColHidden, videoA, videoB]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black rounded-[24px] md:rounded-[36px] shadow-inner">
      <video
        ref={playerARef}
        src={videoA}
        muted
        playsInline
        onEnded={handleEnded}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          activePlayer === "A" ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      />
      <video
        ref={playerBRef}
        src={videoB}
        muted
        playsInline
        onEnded={handleEnded}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          activePlayer === "B" ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      />
    </div>
  );
}

export default function HeroVideoTriptych() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [initialSlice, setInitialSlice] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const shuffled = [...HERO_VIDEOS].sort(() => 0.5 - Math.random());
      setInitialSlice([shuffled[0], shuffled[1], shuffled[2]]);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, []);

  if (initialSlice.length < 3) {
    return <div ref={containerRef} className="absolute inset-0 bg-[#EBE8E1]" />;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 p-2 md:p-4 h-full w-full z-0 select-none"
    >
      <VideoColumn initialVideo={initialSlice[0]} allVideos={HERO_VIDEOS} inView={inView} />
      <div className="hidden md:block h-full w-full relative">
        <VideoColumn
          initialVideo={initialSlice[1]}
          allVideos={HERO_VIDEOS}
          inView={inView}
          isColHidden={isMobile}
        />
      </div>
      <div className="hidden md:block h-full w-full relative">
        <VideoColumn
          initialVideo={initialSlice[2]}
          allVideos={HERO_VIDEOS}
          inView={inView}
          isColHidden={isMobile}
        />
      </div>
    </div>
  );
}
