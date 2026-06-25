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
}

function VideoColumn({ initialVideo, allVideos }: VideoColumnProps) {
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
      if (playerBRef.current) {
        playerBRef.current.play().catch((err) => {
          console.warn("Standby player B failed to play:", err);
        });
      }
      // Prepare a new random video for A (different from the one that just started playing on B)
      const nextForA = allVideos.filter((v) => v !== videoB);
      const randSrc = nextForA[Math.floor(Math.random() * nextForA.length)];
      setVideoA(randSrc);
    } else {
      setActivePlayer("A");
      if (playerARef.current) {
        playerARef.current.play().catch((err) => {
          console.warn("Standby player A failed to play:", err);
        });
      }
      // Prepare a new random video for B (different from the one that just started playing on A)
      const nextForB = allVideos.filter((v) => v !== videoA);
      const randSrc = nextForB[Math.floor(Math.random() * nextForB.length)];
      setVideoB(randSrc);
    }
  };

  // Ensure the active player plays when state switches or files mount
  useEffect(() => {
    const active = activePlayer === "A" ? playerARef.current : playerBRef.current;
    if (active && active.paused && (videoA || videoB)) {
      active.play().catch((err) => {
        // Log low-priority warning for autoplays (which should be allowed as they are muted)
        console.debug("Video playback failed/interrupted on state change:", err);
      });
    }
  }, [activePlayer, videoA, videoB]);

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
  const [initialSlice, setInitialSlice] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle lists on client mount to ensure distinct random starting videos for the columns
    const timer = setTimeout(() => {
      const shuffled = [...HERO_VIDEOS].sort(() => 0.5 - Math.random());
      setInitialSlice([shuffled[0], shuffled[1], shuffled[2]]);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (initialSlice.length < 3) {
    return <div className="absolute inset-0 bg-[#EBE8E1]" />;
  }

  return (
    <div className="absolute inset-0 grid grid-cols-3 gap-2 md:gap-4 p-2 md:p-4 h-full w-full z-0 select-none">
      <VideoColumn initialVideo={initialSlice[0]} allVideos={HERO_VIDEOS} />
      <VideoColumn initialVideo={initialSlice[1]} allVideos={HERO_VIDEOS} />
      <VideoColumn initialVideo={initialSlice[2]} allVideos={HERO_VIDEOS} />
    </div>
  );
}
