import React from "react";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export default function Page() {
  const stats = [
  {
    "label": "App Store Speed",
    "value": "60fps"
  },
  {
    "label": "Offline Support",
    "value": "100%"
  },
  {
    "label": "Code Reusability",
    "value": "92%"
  }
];
  const challenges = [
  {
    "title": "Lagging Scroll Speeds",
    "desc": "Poorly optimized cross-platform frameworks cause interface stutters under load."
  },
  {
    "title": "Offline Data Loss",
    "desc": "App crashes and data loss when users lose internet connection in client portals."
  },
  {
    "title": "Duplicated Codebases",
    "desc": "Maintaining separate Swift and Kotlin codebases doubles development costs."
  }
];
  const methodology = {
  "title": "Thread-Segmented Mobile Engines",
  "desc": "We build mobile apps utilizing React Native and Flutter configured for native compilation.\n\nBy optimizing UI rendering and using local SQLite databases, we ensure 60fps speeds and offline capabilities, syncing data silently when connection recovers.",
  "image": "/images/mobile_developer_testing.png"
};
  const capabilities = [
  {
    "title": "Cross-Platform Build",
    "desc": "Writing React Native code that compiles natively for iOS and Android.",
    "icon": "phone_iphone"
  },
  {
    "title": "Local SQLite Caching",
    "desc": "Enabling fast search and offline functionality on user devices.",
    "icon": "dns"
  },
  {
    "title": "Hardware Integrations",
    "desc": "Connecting app code to camera, NFC, Bluetooth, and biometric sensors.",
    "icon": "sensors"
  },
  {
    "title": "App Store Publishing",
    "desc": "Managing Apple App Store and Google Play deployment guidelines.",
    "icon": "publish"
  }
];
  const techStack = [
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "SQLite",
  "Firebase",
  "Expo"
];
  const workflow = [
  {
    "step": "A",
    "title": "UX Prototyping",
    "desc": "Design responsive, thumb-friendly mobile layouts in Figma."
  },
  {
    "step": "B",
    "title": "API Connection",
    "desc": "Build secure JWT authentication endpoints on servers."
  },
  {
    "step": "C",
    "title": "Application Coding",
    "desc": "Write clean React Native modules and compile natively."
  },
  {
    "step": "D",
    "title": "Beta Play Tests",
    "desc": "Test app builds on target test devices (TestFlight/Google Beta)."
  }
];
  const faqs = [
  {
    "question": "How do you achieve native performance in React Native?",
    "answer": "By offloading calculation logic to background threads and using native UI navigation components."
  },
  {
    "question": "How is offline data synced?",
    "answer": "We queue API operations in local database storage and push updates chronologically when connection returns."
  }
];

  return (
    <ServicePageTemplate
      category="Mobile Platforms"
      title="Mobile Application Development"
      description="We engineer high-performance iOS and Android applications, utilizing cross-platform frameworks to deliver native speed and offline capabilities."
      heroImage="/images/mobile_ui_mockup.png"
      stats={stats}
      challenges={challenges}
      methodology={methodology}
      capabilities={capabilities}
      techStack={techStack}
      workflow={workflow}
      faqs={faqs}
    />
  );
}
