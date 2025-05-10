'use client';
import React, { useEffect, useState } from "react";
import ForceGraphDemo from './ForceGraphDemo';

function NavHideOnScroll({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY < 300);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{
      transform: show ? 'translateY(0)' : 'translateY(-100%)',
      opacity: show ? 1 : 0,
      transition: 'transform 0.5s cubic-bezier(.4,2,.6,1), opacity 0.5s',
      pointerEvents: show ? 'auto' : 'none',
      position: 'relative',
      zIndex: 50,
    }}>
      {children}
    </div>
  );
}

export default function ForceGraphProject() {
  const NAVBAR_HEIGHT = 72; // px
  const FOOTER_HEIGHT = 64; // px

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-100">

      {/* Main Section */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-32 pb-10 px-4 mt-[72px]">
        <div className="backdrop-blur-xl bg-white/70 border border-primary-100 rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-mono text-primary mb-3 drop-shadow-md">UX Principles Force Graph</h1>
          <p className="text-lg md:text-xl text-foreground/80 font-sans mb-1">Explore the relationships between core UX concepts in an interactive 3D force-directed graph.</p>
          <p className="text-base text-foreground/60 font-sans">Hover or click nodes for details. Use the legend to interpret the graph's colors and structure.</p>
        </div>
      </section>

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

      {/* Main Content: Force Graph fills the space between nav and footer */}
      <main
        className="flex-1 flex flex-col items-center justify-center relative z-10"
        style={{ paddingTop: NAVBAR_HEIGHT, paddingBottom: FOOTER_HEIGHT }}
      >
        <div className="w-full max-w-6xl mx-auto rounded-3xl shadow-xl bg-white/80 backdrop-blur-lg p-2 md:p-6 relative">
          <ForceGraphDemo />
        </div>
      </main>

    </div>
  );
}
