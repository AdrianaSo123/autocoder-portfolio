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
        {/* Income & Hypertension Visualization Project Card */}
        <div className="bg-white rounded-xl shadow-sm border-l-4 border-accent-400 p-8 flex flex-col items-start">
          <h2 className="text-2xl font-mono font-semibold text-primary-700 mb-2">Income & Hypertension Visualization</h2>
          <p className="text-medium-contrast mb-4">
            An interactive data visualization exploring the relationship between median income and hypertension rates across Georgia counties. Built with React and D3.js, this project demonstrates how socioeconomic factors impact health outcomes.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-mono">React</span>
            <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-mono">D3.js</span>
            <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-xs font-mono">Data Viz</span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-mono">Public Health</span>
          </div>
          <div className="flex gap-3 mt-2">
            <a
              href="/projects/data-visualization"
              className="inline-block bg-gradient-to-r from-accent-400 to-primary-500 text-white font-bold px-5 py-2 rounded-full shadow hover:opacity-90 transition text-base font-mono"
            >
              Try Now
            </a>
            <a
              href="https://github.com/AdrianaSo123/health-hypertension_copy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-accent-400 text-accent-700 hover:bg-accent-50 px-5 py-2 rounded-full shadow-sm transition text-base font-mono"
            >
              GitHub
            </a>
          </div>
        </div>
                {/* Force Graph Demo Project Card */}
        <div className="bg-white rounded-xl shadow-sm border-l-4 border-primary-500 p-8 flex flex-col items-start">
          <h2 className="text-2xl font-mono font-semibold text-primary-700 mb-2">Force Graph Demo</h2>
          <p className="text-medium-contrast mb-4">
            An interactive force-directed graph visualization, fully integrated with the portfolio’s design system. Explore network data and graph structures with a seamless, branded UX.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-mono">React</span>
            <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-mono">Force Graph</span>
            <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-xs font-mono">Data Viz</span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-mono">Network</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-mono">Interactive</span>
          </div>
          <div className="flex gap-3 mt-2">
            <a
              href="/projects/force-graph"
              className="inline-block bg-gradient-to-r from-primary-500 to-accent-400 text-white font-bold px-5 py-2 rounded-full shadow hover:opacity-90 transition text-base font-mono"
            >
              Try Now
            </a>
            <a
              href="https://github.com/vasturiano/react-force-graph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-primary-500 text-primary-700 hover:bg-primary-50 px-5 py-2 rounded-full shadow-sm transition text-base font-mono"
            >
              GitHub
            </a>
          </div>
        </div>
        {/* Add more project cards below as needed, each with Try Now and GitHub buttons */}
      </section>
    </main>
  );
}
