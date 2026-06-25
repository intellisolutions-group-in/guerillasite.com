"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const gsapCtxRef = useRef<gsap.Context | null>(null);
  const pathname = usePathname();

  // 1. Mount effect: Initialize Lenis scroll engine
  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis with native RAF disabled to drive via GSAP ticker
    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.07, // Smoother cinematic scroll interpolation
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).lenis = lenis;

    // Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis through GSAP's ticker to sync scroll triggers and prevent animation jitter
    const updateLenis = (time: number) => {
      // GSAP ticker passes time in seconds, Lenis expects milliseconds
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);

    // Disable lag smoothing to keep scrolling synchronized under load
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      if (typeof window !== "undefined") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (window as any).lenis;
      }
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  // 2. Navigation / Pathname effect: Recreate GSAP ScrollTriggers
  useEffect(() => {
    // Revert previous page's animations
    if (gsapCtxRef.current) {
      gsapCtxRef.current.revert();
      gsapCtxRef.current = null;
    }

    // Scroll back to top immediately on page change
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }

    // Create new GSAP context for the current page
    const ctx = gsap.context(() => {
      // Hero load animations (triggered by scroll/viewport entry) if targets exist on page
      const heroElements = gsap.utils.toArray(".gsap-hero-animate");
      if (heroElements.length > 0) {
        gsap.from(heroElements, {
          scrollTrigger: {
            trigger: heroElements[0] as HTMLElement,
            start: "top 95%",
            toggleActions: "play none none none"
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out"
        });
      }

      // Individual slide-up animations on scroll
      gsap.utils.toArray<HTMLElement>(".gsap-slide-up").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });

      // Generic Horizontal Scroll Pinning (for Services page procedures/stages)
      gsap.utils.toArray<HTMLElement>(".service-horizontal-scroll-section").forEach((section) => {
        const container = section.querySelector(".service-horizontal-scroll-content") as HTMLElement;
        if (container) {
          gsap.to(container, {
            x: () => -(container.scrollWidth - window.innerWidth + 120),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              pin: true,
              scrub: 1,
              start: "top top",
              end: () => `+=${container.scrollWidth - window.innerWidth}`,
              invalidateOnRefresh: true,
            }
          });
        }
      });

      // Individual fade-in animations on scroll
      gsap.utils.toArray<HTMLElement>(".gsap-fade-in").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });

      // Grid stagger animation on scroll
      gsap.utils.toArray<HTMLElement>(".gsap-stagger-container").forEach((container) => {
        const items = container.querySelectorAll(".gsap-stagger-item");
        if (items.length > 0) {
          gsap.from(items, {
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              toggleActions: "play none none none"
            },
            y: 35,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out"
          });
        }
      });

      // Grid stagger animation on scroll (Scale-In)
      gsap.utils.toArray<HTMLElement>(".gsap-stagger-scale").forEach((container) => {
        const items = container.querySelectorAll(".gsap-stagger-item");
        if (items.length > 0) {
          gsap.from(items, {
            scrollTrigger: {
              trigger: container,
              start: "top 88%",
              toggleActions: "play none none none"
            },
            scale: 0.92,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "back.out(1.1)"
          });
        }
      });

      // Border Draw animation on scroll
      gsap.utils.toArray<HTMLElement>(".gsap-border-draw").forEach((el) => {
        gsap.fromTo(el,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // Image clipping mask reveal animation on scroll
      gsap.utils.toArray<HTMLElement>(".gsap-image-reveal").forEach((el) => {
        const img = el.querySelector("img");
        if (img) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none"
            }
          });
          
          tl.fromTo(el,
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.0, ease: "power3.inOut" }
          );
          
          tl.fromTo(img,
            { scale: 1.2 },
            { scale: 1, duration: 1.2, ease: "power2.out" },
            0
          );
        }
      });

      // Individual scale-in animation on scroll
      gsap.utils.toArray<HTMLElement>(".gsap-scale-in").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none"
          },
          scale: 0.92,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.2)"
        });
      });
    });

    gsapCtxRef.current = ctx;

    // Sync Lenis size calculations and refresh ScrollTrigger positions after page updates
    if (lenisRef.current) {
      lenisRef.current.resize();
    }
    ScrollTrigger.refresh();

    // Staggered layout-settle timers to account for asynchronous component/image rendering shifts
    const t1 = setTimeout(() => {
      if (lenisRef.current) lenisRef.current.resize();
      ScrollTrigger.refresh();
    }, 400);
    const t2 = setTimeout(() => {
      if (lenisRef.current) lenisRef.current.resize();
      ScrollTrigger.refresh();
    }, 1000);
    const t3 = setTimeout(() => {
      if (lenisRef.current) lenisRef.current.resize();
      ScrollTrigger.refresh();
    }, 2200);

    return () => {
      if (ctx) ctx.revert();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return <>{children}</>;
}
