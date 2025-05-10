import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Design explorations, UX process work, and creative experiments
const designItems: { title: string; img: string; description: string; category: string }[] = [
  {
    title: "Card Sort Study",
    img: "/images/playground/card%20sort%20study.png",
    description: "Research study analyzing students' sleeping conditions through card sorting methodology to identify patterns and preferences in sleep environments.",
    category: "UX Research"
  },
  {
    title: "User Persona",
    img: "/images/playground/Persona.png",
    description: "Detailed persona developed for the student sleep project, capturing key demographics, behaviors, pain points, and goals to guide solution development.",
    category: "UX Process"
  },
  {
    title: "UX Hackathon Wireframes",
    img: "/images/playground/wireframe%20from%20ux%20hackathon.jpg",
    description: "Award-winning wireframes from a UX hackathon where my team placed second. These low-fidelity designs demonstrate rapid ideation and problem-solving skills.",
    category: "UI Design"
  },
  {
    title: "UX Research Synthesis",
    img: "/images/playground/research.png",
    description: "Affinity diagram created during user research to synthesize insights and identify key themes for a healthcare application.",
    category: "UX Process"
  },
  {
    title: "Design System Components",
    img: "/images/playground/figma%20screen.png",
    description: "Component library developed in Figma for a consistent design language across multiple platforms.",
    category: "UI Design"
  }
];

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(255, 255, 255, 0.1)" fillOpacity="0.5" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Section - UX Portfolio Introduction */}
        <section className="flex flex-col items-center justify-center pt-16 pb-8 text-center">
          <div className="backdrop-blur-xl bg-white/70 border border-primary-100 rounded-2xl shadow-xl p-6 max-w-3xl w-full">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full border border-primary-100 mb-4">
              <p className="text-sm font-mono text-primary-700">Inclusive Design Process</p>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold font-mono text-primary-700 mb-4 drop-shadow-md">UX Portfolio</h1>
            <p className="text-lg text-medium-contrast max-w-2xl mx-auto mb-6">
              Selected UX work showcasing my design thinking and user-centered approach. As a developer with a passion for UX, these artifacts demonstrate how I integrate technical solutions with empathetic design practices.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary-50/80 backdrop-blur-sm py-2 px-4 rounded-full text-sm text-primary-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span className="font-medium">Gallery View</span> • Each card displays a snapshot of my UX process and design work
            </div>
          </div>
        </section>

        {/* UX Portfolio Gallery Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm rounded-3xl px-6 md:px-10 my-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full border border-primary-100 mb-4">
              <p className="text-sm font-mono text-primary-700">UX Artifacts</p>
            </div>
            <h2 className="text-3xl font-bold font-mono text-primary-700 mb-4">Design Process Showcase</h2>
            <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
              Explore artifacts from my UX process that demonstrate my approach to creating accessible, inclusive digital experiences.
            </p>
          </div>
          
          {designItems.length === 0 ? (
            <div className="text-center text-medium-contrast py-16 bg-white/80 backdrop-blur-sm rounded-xl border border-primary-100 p-8">
              <p className="text-lg mb-4 font-semibold text-primary-700">Design resources coming soon!</p>
              <p>Check back later for UX case studies, design systems, and creative explorations.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designItems.map((item, index) => {
                // Determine border color based on category
                let borderColor = "border-l-primary-400";
                if (item.category === "UX Research") borderColor = "border-l-accent-400";
                if (item.category === "UI Design") borderColor = "border-l-secondary-400";
                
                return (
                  <Card key={index} className={`bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${borderColor} border-t border-r border-b border-primary-100 overflow-hidden h-full`}>
                    <div className="aspect-w-16 aspect-h-9 relative">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-0 right-0 m-2">
                        <span className="inline-block bg-white/90 backdrop-blur-sm text-primary-700 px-3 py-1 rounded-full text-xs font-mono shadow-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-bold text-primary-700 mb-3 font-mono">{item.title}</h3>
                      <p className="text-medium-contrast text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </section>

        {/* UX Process Section */}
        <section className="py-16 bg-gradient-to-b from-transparent to-white/50 backdrop-blur-sm rounded-3xl px-6 md:px-10 mb-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full border border-primary-100 mb-4">
              <p className="text-sm font-mono text-primary-700">My Approach</p>
            </div>
            <h2 className="text-3xl font-bold font-mono text-primary-700 mb-4">UX Design Process</h2>
            <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
              My approach to UX design emphasizes accessibility, inclusion, and user-centered thinking at every stage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-primary-400 border-t border-r border-b border-primary-100">
              <CardContent className="p-5">
                <h3 className="font-bold text-primary-700 mb-2 font-mono">Research</h3>
                <p className="text-medium-contrast text-sm">
                  Understanding user needs through interviews, surveys, and contextual inquiry with a focus on diverse user perspectives.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-accent-400 border-t border-r border-b border-primary-100">
              <CardContent className="p-5">
                <h3 className="font-bold text-accent-700 mb-2 font-mono">Define</h3>
                <p className="text-medium-contrast text-sm">
                  Synthesizing research into actionable insights, creating personas and journey maps that represent diverse user needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-secondary-400 border-t border-r border-b border-primary-100">
              <CardContent className="p-5">
                <h3 className="font-bold text-secondary-700 mb-2 font-mono">Design</h3>
                <p className="text-medium-contrast text-sm">
                  Creating wireframes and prototypes with accessibility built in from the start, not as an afterthought.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-neutral-400 border-t border-r border-b border-primary-100">
              <CardContent className="p-5">
                <h3 className="font-bold text-neutral-700 mb-2 font-mono">Test & Iterate</h3>
                <p className="text-medium-contrast text-sm">
                  Testing with diverse users, including those with disabilities, and iterating based on inclusive feedback.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
