import React from "react";
import { Button } from "@/components/ui/button";

import { MainNav } from '@/components/main-nav';

export default function DataVisualizationProject() {
  // Height of the navbar (adjust if your navbar height changes)
  const NAVBAR_HEIGHT = 72; // px (e.g., 4.5rem)

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-100">
      <div className="fixed top-0 left-0 w-full z-50">
        <MainNav />
      </div>
      <iframe
        src="/health-and-income-demo/index.html"
        title="Income & Hypertension Visualization Demo"
        width="100%"
        height="100%"
        style={{
          position: 'fixed',
          top: NAVBAR_HEIGHT,
          left: 0,
          width: '100vw',
          height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          border: 'none',
          background: 'white',
          zIndex: 10
        }}
        allowFullScreen
      />
    </div>
  );
}
