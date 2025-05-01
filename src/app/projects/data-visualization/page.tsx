import React from "react";
import { MainNav } from '@/components/main-nav';
import ForceGraphDemo from './ForceGraphDemo';

export default function DataVisualizationProject() {
  const NAVBAR_HEIGHT = 72; // px
  const FOOTER_HEIGHT = 64; // px

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-100">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <MainNav />
      </div>
      {/* Main Content: Force Graph fills the space between nav and footer */}
      <main
        className="flex-1 flex flex-col"
        style={{ paddingTop: NAVBAR_HEIGHT, paddingBottom: FOOTER_HEIGHT }}
      >
        <ForceGraphDemo />
      </main>
      {/* Footer */}
      <footer
        className="w-full bg-card border-t border-primary-100 py-6 text-center text-sm text-foreground/70"
        style={{ height: FOOTER_HEIGHT, minHeight: FOOTER_HEIGHT }}
      >
        <span className="font-mono font-semibold text-primary">Adriana Portfolio</span> &copy; 2025 Adriana So. All rights reserved.
        <div className="mt-2">
          <a href="mailto:adriana@email.com" className="text-primary mx-2 font-medium underline underline-offset-2">Email</a>
          <a href="https://github.com/AdrianaSo123" className="text-primary mx-2 font-medium underline underline-offset-2">GitHub</a>
          <a href="/" className="text-primary mx-2 font-medium underline underline-offset-2">Home</a>
        </div>
      </footer>
    </div>
  );
}
