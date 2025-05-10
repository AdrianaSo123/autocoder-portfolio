import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Animated SVG Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-full h-full">
          <defs>
            <radialGradient id="bg1" cx="50%" cy="50%" r="80%" fx="60%" fy="40%" gradientTransform="rotate(20)">
              <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.25" />
              <stop offset="80%" stopColor="#f0abfc" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="bg2" cx="50%" cy="50%" r="80%" fx="30%" fy="70%" gradientTransform="rotate(-15)">
              <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.20" />
              <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="900" cy="250" rx="600" ry="300" fill="url(#bg1)">
            <animate attributeName="cx" values="900;700;900" dur="12s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="400" cy="650" rx="500" ry="230" fill="url(#bg2)">
            <animate attributeName="cy" values="650;600;650" dur="14s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </div>
      
      <main className="container mx-auto space-y-16 px-4 relative z-10">
        {/* Main Section - Professional Introduction */}
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] py-16 gap-8">
          <div className="flex-1 space-y-6 max-w-[600px]">
            <div className="inline-block bg-white/30 backdrop-blur-sm px-4 py-1 rounded-full border border-primary-100 mb-2">
              <p className="text-sm font-mono text-primary-700">Transforming Complexity into Clarity</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-mono leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">SoKind UX</span>
              <span className="block text-foreground mt-2">Empowering Better Digital Experiences</span>
            </h1>
            
            <p className="text-xl text-primary-700 font-medium">
              Adriana So — Developer with a Passion for UX
            </p>
            
            <p className="text-lg text-medium-contrast">
              I create user-centered technical solutions that make a difference. My mission is to bridge the gap between complex technology and human needs, building tools that enhance the UX design process and empower both designers and users.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="text-base text-white"
                style={{
                  background: 'linear-gradient(90deg, var(--primary-600), var(--accent-500))',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 14px 0 rgba(var(--primary-600-rgb), 0.25)',
                }}
                asChild
              >
                <a href="/projects">Explore My Work</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base border-primary-400 text-primary-700 hover:bg-primary-50"
                style={{ borderRadius: '9999px' }}
                asChild
              >
                <a href="/contact">Let's Work Together</a>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-[450px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-accent-200 to-primary-200 rounded-full opacity-40"></div>
              <div className="absolute inset-8 bg-white/90 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-primary-700 mb-2">Core Values</h3>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-medium-contrast">Empathy-First Approach</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-medium-contrast">Technical Excellence</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-medium-contrast">Transformative Design</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-medium-contrast">Inclusive Solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Section - Professional Path */}
        <div className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-primary-700 mb-4">My Professional Journey</h2>
            <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
              My approach combines technical expertise with user-centered design principles to create solutions that make a real difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-primary-400 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <CardTitle className="font-mono tracking-tight text-primary-700">Discover</CardTitle>
                <CardDescription>Understanding the challenge</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-medium-contrast">
                  Every professional journey begins with understanding the challenge. I start by deeply empathizing with users, identifying pain points, and defining clear goals that will guide the solution.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-accent-400 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <CardTitle className="font-mono tracking-tight text-accent-700">Create</CardTitle>
                <CardDescription>Crafting the solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-medium-contrast">
                  With a clear vision, I combine technical expertise and design thinking to build solutions that are both powerful and intuitive. This is where code meets creativity to overcome obstacles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-secondary-400 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <CardTitle className="font-mono tracking-tight text-secondary-700">Transform</CardTitle>
                <CardDescription>Making a meaningful impact</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-medium-contrast">
                  The true reward is transformation. My work aims to create positive change for users, turning frustration into delight and complexity into clarity. This is how technology becomes truly impactful.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Projects Section - Showcasing Inclusive Design */}
        <div className="py-16 bg-gradient-to-b from-transparent to-white/50 backdrop-blur-sm rounded-3xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full border border-primary-100 mb-4">
              <p className="text-sm font-mono text-primary-700">Inclusive Design</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-primary-700 mb-4">Featured Projects</h2>
            <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
              Explore how I've used my technical skills and UX passion to create accessible, inclusive, and impactful solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-100 overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-primary-400 to-accent-400"></div>
              <CardHeader>
                <CardTitle className="font-mono text-primary-700 flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                  AI UX Chat
                </CardTitle>
                <CardDescription>Interactive AI-powered UX design assistant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-medium-contrast mb-6">
                  An AI-powered chat application that provides real-time UX design advice based on Nielsen Norman principles. This project demonstrates how AI can empower designers to create more user-centered experiences.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">Node.js</span>
                  <span className="bg-accent-50 text-accent-600 px-2 py-1 rounded-full text-xs font-mono">Socket.IO</span>
                  <span className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded-full text-xs font-mono">OpenAI</span>
                </div>
                <Button
                  className="bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:opacity-90 transition-opacity"
                  asChild
                >
                  <a href="/projects/ai-ux-chat">View Project</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-100 overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-accent-400 to-secondary-400"></div>
              <CardHeader>
                <CardTitle className="font-mono text-primary-700 flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                  </svg>
                  Force Graph
                </CardTitle>
                <CardDescription>Interactive data visualization</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-medium-contrast mb-6">
                  A dynamic force-directed graph visualization built with React and D3.js. This project showcases how complex data relationships can be transformed into intuitive and engaging visual experiences.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">React</span>
                  <span className="bg-accent-50 text-accent-600 px-2 py-1 rounded-full text-xs font-mono">D3.js</span>
                  <span className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded-full text-xs font-mono">Data Viz</span>
                </div>
                <Button
                  className="bg-gradient-to-r from-accent-500 to-secondary-500 text-white hover:opacity-90 transition-opacity"
                  asChild
                >
                  <a href="/projects/force-graph">View Project</a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="text-base border-primary-400 text-primary-700 hover:bg-primary-50"
              style={{ borderRadius: '9999px' }}
              asChild
            >
              <a href="/projects">View All Projects</a>
            </Button>
          </div>
        </div>


      </main>
    </div>
  );
}
