import React from "react";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      {/* Bio Section */}
      <section className="mb-10 text-center">
        <img
          src="/profile.jpg"
          alt="Adriana So, Creative Technologist"
          className="mx-auto mb-6 rounded-full w-32 h-32 object-cover shadow-lg border-4 border-primary-200"
          style={{ background: '#fff' }}
        />
        <h2 className="text-2xl font-mono font-semibold text-primary-700 mb-2">Adriana So</h2>
        <p className="text-medium-contrast max-w-2xl mx-auto mb-4">
          <span className="font-semibold">Developer · UX Designer · AI Enthusiast</span>
        </p>
        <p className="text-lg text-medium-contrast max-w-2xl mx-auto mb-8">
          Hi! I’m Adriana—a developer and UX designer who loves to create intuitive, beautiful, and impactful digital experiences. My background blends software development, user experience, and a growing expertise in working with AI. I enjoy building interactive projects, exploring how AI can enhance creativity and usability, and sharing what I learn along the way. This portfolio is a collection of my favorite experiments, projects, and ideas at the intersection of code, design, and intelligent technology.
        </p>
      </section>

      {/* Personal Statement Section */}
      <section className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-primary-700 tracking-tight mb-4">About This Portfolio</h1>
        <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
          This site is a home for my personal and professional projects—ranging from data visualizations and creative coding experiments to UX case studies. Each project is an opportunity to learn, play, and push boundaries in tech and design.
        </p>
      </section>

    </main>
  );
}
