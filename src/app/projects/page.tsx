import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(255, 255, 255, 0.1)" fillOpacity="0.5" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Section - Projects Introduction */}
        <section className="flex flex-col items-center justify-center pt-16 pb-8 text-center">
          <div className="backdrop-blur-xl bg-white/70 border border-primary-100 rounded-2xl shadow-xl p-6 max-w-3xl w-full">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full border border-primary-100 mb-4">
              <p className="text-sm font-mono text-primary-700">Development Portfolio</p>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-mono text-primary-700 mb-4 drop-shadow-md">Projects</h1>
            <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
              A showcase of my development work with a focus on UX enhancement. These projects demonstrate how technical solutions can improve the user experience through interactive visualizations, AI assistance, and data-driven insights.
            </p>
          </div>
        </section>

        {/* Projects Showcase Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm rounded-3xl px-6 md:px-10 my-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full border border-primary-100 mb-4">
              <p className="text-sm font-mono text-primary-700">Featured Work</p>
            </div>
            <h2 className="text-3xl font-bold font-mono text-primary-700 mb-4">Interactive Experiences</h2>
            <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
              Explore my projects that combine technical expertise with accessible, user-centered design principles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AI UX Chat Demo Project Card */}
            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-primary-400 border-t border-r border-b border-primary-100 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary-700 mb-3 font-mono flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                  AI UX Chat Demo
                </h3>
                <p className="text-medium-contrast mb-6">
                  An interactive chat experience with an AI UX professional, styled to match the portfolio's brand. Built with Node.js, Express, Socket.IO, and OpenAI, this project demonstrates conversational AI and real-time UX guidance.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">Node.js</span>
                  <span className="bg-accent-50 text-accent-600 px-2 py-1 rounded-full text-xs font-mono">Socket.IO</span>
                  <span className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded-full text-xs font-mono">OpenAI</span>
                  <span className="bg-purple-50 text-purple-600 px-2 py-1 rounded-full text-xs font-mono">UX</span>
                  <span className="bg-orange-50 text-orange-600 px-2 py-1 rounded-full text-xs font-mono">Chatbot</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="/projects/ai-ux-chat"
                    className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold px-5 py-2 rounded-full shadow hover:opacity-90 transition text-sm font-mono"
                    aria-label="Try the SoKind UX Assistant"
                  >
                    Try Assistant
                  </a>
                  <a
                    href="https://github.com/AdrianaSo123/autocoder-portfolio/tree/main/reference-projects/JS-RAGS-Demo-autocodebase/ai-ux-chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-primary-400 text-primary-700 hover:bg-primary-50 px-5 py-2 rounded-full shadow-sm transition text-sm font-mono"
                  >
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Income & Hypertension Visualization Project Card */}
            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-accent-400 border-t border-r border-b border-primary-100 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary-700 mb-3 font-mono flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                  </svg>
                  Income & Hypertension Visualization
                </h3>
                <p className="text-medium-contrast mb-6">
                  An interactive data visualization exploring the relationship between median income and hypertension rates across Georgia counties. Built with React and D3.js, this project demonstrates how socioeconomic factors impact health outcomes.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">React</span>
                  <span className="bg-accent-50 text-accent-600 px-2 py-1 rounded-full text-xs font-mono">D3.js</span>
                  <span className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded-full text-xs font-mono">Data Viz</span>
                  <span className="bg-orange-50 text-orange-600 px-2 py-1 rounded-full text-xs font-mono">Public Health</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="/projects/health-and-income"
                    className="inline-block bg-gradient-to-r from-accent-500 to-secondary-500 text-white font-bold px-5 py-2 rounded-full shadow hover:opacity-90 transition text-sm font-mono"
                  >
                    Try Now
                  </a>
                  <a
                    href="https://github.com/AdrianaSo123/health-hypertension_copy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-accent-400 text-accent-700 hover:bg-accent-50 px-5 py-2 rounded-full shadow-sm transition text-sm font-mono"
                  >
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Force Graph Demo Project Card */}
            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-secondary-400 border-t border-r border-b border-primary-100 overflow-hidden md:col-span-2 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary-700 mb-3 font-mono flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Force Graph Demo
                </h3>
                <p className="text-medium-contrast mb-6">
                  An interactive force-directed graph visualization, fully integrated with the portfolio's design system. Explore network data and graph structures with a seamless, branded UX that demonstrates the power of interactive data visualization.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">React</span>
                  <span className="bg-accent-50 text-accent-600 px-2 py-1 rounded-full text-xs font-mono">Force Graph</span>
                  <span className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded-full text-xs font-mono">Data Viz</span>
                  <span className="bg-orange-50 text-orange-600 px-2 py-1 rounded-full text-xs font-mono">Network</span>
                  <span className="bg-purple-50 text-purple-600 px-2 py-1 rounded-full text-xs font-mono">Interactive</span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="/projects/force-graph"
                    className="inline-block bg-gradient-to-r from-secondary-500 to-primary-500 text-white font-bold px-5 py-2 rounded-full shadow hover:opacity-90 transition text-sm font-mono"
                  >
                    Try Now
                  </a>
                  <a
                    href="https://github.com/AdrianaSo123/autocoder-portfolio/tree/main/src/app/projects/force-graph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-secondary-400 text-secondary-700 hover:bg-secondary-50 px-5 py-2 rounded-full shadow-sm transition text-sm font-mono"
                  >
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-16 bg-gradient-to-b from-transparent to-white/50 backdrop-blur-sm rounded-3xl px-6 md:px-10 mb-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full border border-primary-100 mb-4">
              <p className="text-sm font-mono text-primary-700">Technical Skills</p>
            </div>
            <h2 className="text-3xl font-bold font-mono text-primary-700 mb-4">Technology Stack</h2>
            <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
              The technologies I use to create accessible, inclusive digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-primary-400 border-t border-r border-b border-primary-100">
              <CardContent className="p-5">
                <h3 className="font-bold text-primary-700 mb-2 font-mono">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">React</span>
                  <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">Next.js</span>
                  <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">TypeScript</span>
                  <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">Tailwind CSS</span>
                  <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">D3.js</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-accent-400 border-t border-r border-b border-primary-100">
              <CardContent className="p-5">
                <h3 className="font-bold text-accent-700 mb-2 font-mono">Data & Visualization</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent-50 text-accent-600 px-2 py-1 rounded-full text-xs font-mono">D3.js</span>
                  <span className="bg-accent-50 text-accent-600 px-2 py-1 rounded-full text-xs font-mono">Data Analysis</span>
                  <span className="bg-accent-50 text-accent-600 px-2 py-1 rounded-full text-xs font-mono">Force Graph</span>
                  <span className="bg-accent-50 text-accent-600 px-2 py-1 rounded-full text-xs font-mono">CSV Processing</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-secondary-400 border-t border-r border-b border-primary-100">
              <CardContent className="p-5">
                <h3 className="font-bold text-secondary-700 mb-2 font-mono">AI & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded-full text-xs font-mono">OpenAI API</span>
                  <span className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded-full text-xs font-mono">Socket.IO</span>
                  <span className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded-full text-xs font-mono">Git/GitHub</span>
                  <span className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded-full text-xs font-mono">Vercel</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
