import React from "react";
import ForceGraphDemo from './ForceGraphDemo';

export default function DataVisualizationProject() {
  const NAVBAR_HEIGHT = 72; // px
  const FOOTER_HEIGHT = 64; // px

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-100">

      {/* Main Content: Force Graph fills the space between nav and footer */}
      <main
        className="flex-1 flex flex-col"
        style={{ paddingTop: NAVBAR_HEIGHT, paddingBottom: FOOTER_HEIGHT }}
      >
        <ForceGraphDemo />
      </main>

    </div>
  );
}
