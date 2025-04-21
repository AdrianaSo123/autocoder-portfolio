import React from "react";
import { Button } from "@/components/ui/button";

export default function DataVisualizationProject() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-mono font-bold text-gradient-brand mb-6">Income & Hypertension Visualization</h1>
      <div className="mb-8">
        <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-mono mr-2">React</span>
        <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-mono mr-2">D3.js</span>
        <span className="inline-block bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-xs font-mono">Data Viz</span>
      </div>
      <p className="text-lg text-medium-contrast mb-6">
        This project explores the relationship between median income over time and hypertension rates. Using React components and D3, I created interactive data visualizations to analyze trends and uncover potential connections between socioeconomic status and health outcomes.
      </p>
      <div className="flex gap-4 mb-10">
        <Button
          asChild
          className="bg-gradient-to-r from-accent-400 to-primary-500 text-white font-bold px-5 py-2 rounded-full shadow hover:opacity-90 transition"
        >
          <a href="https://github.com/AdrianaSo123/health-hypertension_copy" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </Button>
      </div>
      {/* Placeholder for future screenshots or embedded visualizations */}
      <div className="bg-gradient-innovation rounded-xl h-64 flex items-center justify-center text-white text-xl font-mono">
        [ Project Visualization Preview Coming Soon ]
      </div>
    </main>
  );
}
