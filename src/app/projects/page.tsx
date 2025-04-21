import React from "react";

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <section className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-primary-700 tracking-tight mb-4">Projects</h1>
        <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
          Showcase of AI disruption and digital transformation projects. Explore how Outlaw AI Consultancy delivers innovative, evidence-based solutions that challenge the status quo.
        </p>
      </section>
      <section className="mb-10 grid md:grid-cols-2 gap-8">
        {/* Example Project Card */}
        <div className="bg-card rounded-xl shadow-sm border-l-4 border-accent-500 p-8 flex flex-col items-start">
          <h2 className="text-2xl font-mono font-semibold text-primary-700 mb-2">Income & Hypertension Visualization</h2>
          <p className="text-medium-contrast mb-4">
            An interactive data visualization project exploring the relationship between median income and hypertension rates, built with React and D3.js.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-mono">React</span>
            <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-mono">D3.js</span>
            <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-xs font-mono">Data Viz</span>
          </div>
          <a
            href="https://github.com/AdrianaSo123/health-hypertension_copy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-gradient-to-r from-accent-400 to-primary-500 text-white font-bold px-5 py-2 rounded-full shadow hover:opacity-90 transition"
          >
            View on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
