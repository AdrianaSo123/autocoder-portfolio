import React from "react";

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-100 flex items-center justify-center py-16 px-4">
      <section className="w-full max-w-xl bg-white/80 rounded-3xl shadow-xl border border-primary-100 px-8 py-10 flex flex-col items-center text-center gap-6">
        <img
          src="/images/personal/personal.jpeg"
          alt="Portrait of Adriana So, creative technologist"
          className="mb-4 rounded-full w-28 h-28 object-cover shadow border-4 border-primary-200"
          style={{ background: '#fff' }}
        />
        <h2 className="text-2xl font-mono font-semibold text-primary-700">Adriana So</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-2">
          <span className="inline-block bg-primary-100 text-primary-700 font-mono text-xs px-3 py-1 rounded-full">UX Designer</span>
          <span className="inline-block bg-accent-100 text-accent-700 font-mono text-xs px-3 py-1 rounded-full">UX Researcher</span>
          <span className="inline-block bg-secondary-100 text-secondary-700 font-mono text-xs px-3 py-1 rounded-full">Developer</span>
          <span className="inline-block bg-neutral-100 text-neutral-700 font-mono text-xs px-3 py-1 rounded-full">AI Enthusiast</span>
        </div>
        <div className="text-lg text-medium-contrast mb-2">
          <span className="font-semibold">Mission:</span> Design accessible, research-driven digital experiences that empower, inspire, and put users first.
        </div>
        <div className="text-medium-contrast text-base mb-2">
          <span className="font-semibold">Education:</span> NJIT Web & Information Systems · Bergen County Tech (Law)
        </div>
        <div className="text-medium-contrast text-base mb-2">
          <span className="font-semibold">Skills:</span> UX/UI Design · UX Research (Interviews, Usability Testing, Surveys) · User-Centered Design · Web Dev (React, Next.js, JS/TS, HTML, CSS) · Accessibility · Data Viz · Creative Coding · AI Tools
        </div>
        <div className="text-medium-contrast text-base">
          <span className="font-semibold">Values:</span> Empowerment · Creativity · Accessibility · Social Impact
        </div>
      </section>

      <section className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-primary-700 tracking-tight mb-4">About This Portfolio</h1>
        <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
          This site is a home for my personal and professional projects—ranging from data visualizations and creative coding experiments to UX case studies. Each project is an opportunity to learn, play, and push boundaries in tech and design.
        </p>
      </section>

    </main>
  );
}
