"use client";
import React, { useEffect, useState } from "react";

export default function AIUXChatPage() {
  const NAVBAR_HEIGHT = 72; // px
  const FOOTER_HEIGHT = 64; // px
  const [iframeHeight, setIframeHeight] = useState("calc(100vh - 136px)");

  useEffect(() => {
    // Update iframe height on window resize
    const updateHeight = () => {
      const height = window.innerHeight - NAVBAR_HEIGHT - FOOTER_HEIGHT;
      setIframeHeight(`${height}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Animated SVG Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-full h-full">
          <defs>
            <radialGradient id="bg1" cx="50%" cy="50%" r="80%" fx="60%" fy="40%" gradientTransform="rotate(20)">
              <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.25" />
              <stop offset="80%" stopColor="#f0abfc" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="bg2" cx="50%" cy="50%" r="80%" fx="30%" fy="70%" gradientTransform="rotate(-15)">
              <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.20" />
              <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="900" cy="250" rx="600" ry="300" fill="url(#bg1)">
            <animate attributeName="cx" values="900;700;900" dur="12s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="400" cy="650" rx="500" ry="230" fill="url(#bg2)">
            <animate attributeName="cy" values="650;600;650" dur="14s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </div>
      {/* Main Section */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-16 pb-4 px-4 mt-[72px]">
        <div className="backdrop-blur-xl bg-white/70 border border-primary-100 rounded-2xl shadow-2xl p-5 max-w-2xl w-full text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold font-mono text-primary mb-2 drop-shadow-md">SoKind UX</h1>
          <p className="text-base md:text-lg text-foreground/80 font-sans mb-1">
            Adriana So — Developer with a Passion for UX
          </p>
          <p className="text-sm text-foreground/60 font-sans">
            Chat with a Nielsen Norman Expert
          </p>
        </div>
      </section>

      {/* Iframe Container - Made Larger */}
      <section className="flex-1 w-full max-w-6xl mx-auto px-4 pb-8">
        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-primary-100">
          <iframe
            src="https://js-rags-demo-autocodebase.onrender.com?embedded=true"
            title="Nielsen Norman UX Expert Chat"
            width="100%"
            height={iframeHeight}
            style={{ border: "none" }}
            allow="microphone"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
