import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="rgba(255, 255, 255, 0.1)" fillOpacity="0.5" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <main className="container mx-auto px-4 py-16 relative z-10 flex flex-col gap-16">
        {/* Main Section - Personal Introduction */}
        <section className="flex flex-col md:flex-row gap-8 items-center justify-between pt-16 pb-8">
          <div className="flex-1 space-y-6 max-w-[600px]">
            <div className="inline-block bg-white/30 backdrop-blur-sm px-4 py-1 rounded-full border border-primary-100 mb-2">
              <p className="text-sm font-mono text-primary-700">Developer with a Passion for UX</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-mono text-primary-700 leading-tight">
              Creating <span className="text-accent-600">Accessible</span> & <span className="text-secondary-600">Inclusive</span> Digital Experiences
            </h1>
            <p className="text-lg text-medium-contrast">
              I'm Adriana So, a developer and UX enthusiast on a mission to bridge technology with human needs. My background in law and justice has shaped my approach to design—I believe technology should serve everyone, regardless of ability or background.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-primary-100 text-primary-700 font-mono text-xs px-3 py-1 rounded-full">UX Designer</span>
              <span className="inline-block bg-accent-100 text-accent-700 font-mono text-xs px-3 py-1 rounded-full">UX Researcher</span>
              <span className="inline-block bg-secondary-100 text-secondary-700 font-mono text-xs px-3 py-1 rounded-full">Developer</span>
              <span className="inline-block bg-neutral-100 text-neutral-700 font-mono text-xs px-3 py-1 rounded-full">Accessibility Advocate</span>
              <span className="inline-block bg-primary-100 text-primary-700 font-mono text-xs px-3 py-1 rounded-full">AI Enthusiast</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-200 to-primary-200 rounded-full opacity-40 blur-lg"></div>
            <img
              src="/images/personal/personal.jpeg"
              alt="Portrait of Adriana So, creative technologist"
              className="relative z-10 rounded-full w-56 h-56 object-cover shadow-xl border-4 border-white"
              style={{ background: '#fff' }}
            />
          </div>
        </section>

        {/* My Story Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm rounded-3xl px-6 md:px-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full border border-primary-100 mb-4">
              <p className="text-sm font-mono text-primary-700">My Journey</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-primary-700 mb-4">Where Technology Meets Social Impact</h2>
            <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
              My path to UX and development has been shaped by a deep commitment to social justice and inclusion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border border-primary-100 overflow-hidden">
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-primary-700 mb-4 font-mono">From Law to Digital Advocacy</h3>
                <p className="text-medium-contrast mb-4">
                  My journey began with a Law and Justice major in high school, where I developed a foundation in social justice principles and advocacy. This background ignited my passion for creating systems that serve people equitably.
                </p>
                <p className="text-medium-contrast">
                  I discovered that technology could be a powerful tool for social change when designed with intention and empathy. This led me to pursue Web & Information Systems at NJIT, combining technical skills with my commitment to justice.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-primary-100 overflow-hidden">
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-primary-700 mb-4 font-mono">UX as a Bridge to Human Connection</h3>
                <p className="text-medium-contrast mb-4">
                  I'm drawn to UX because it centers human needs in technology. Good design isn't just about aesthetics—it's about creating genuine connections between people and technology that enhance lives.
                </p>
                <p className="text-medium-contrast">
                  This fall, I'll be taking a Design for Accessibility course to obtain certification. I believe accessibility isn't an add-on feature—it's a fundamental right that should be built into every digital product from the start.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills & Education Section */}
        <section className="py-16 bg-gradient-to-b from-transparent to-white/50 backdrop-blur-sm rounded-3xl px-6 md:px-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full border border-primary-100 mb-4">
              <p className="text-sm font-mono text-primary-700">Skills & Education</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-primary-700 mb-4">My Professional Toolkit</h2>
            <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
              A blend of technical expertise and human-centered design principles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-primary-700 mb-6 font-mono">Education</h3>
              
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm border border-primary-100 rounded-xl p-5">
                  <h4 className="font-bold text-primary-700">New Jersey Institute of Technology</h4>
                  <p className="text-accent-700 font-mono text-sm">Web & Information Systems</p>
                  <p className="text-medium-contrast mt-2">Focusing on the intersection of technology and human-centered design principles.</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm border border-primary-100 rounded-xl p-5">
                  <h4 className="font-bold text-primary-700">Bergen County Technical Schools</h4>
                  <p className="text-accent-700 font-mono text-sm">Law and Justice Major</p>
                  <p className="text-medium-contrast mt-2">Developed critical thinking, advocacy skills, and a strong foundation in social justice principles.</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm border border-primary-100 rounded-xl p-5">
                  <h4 className="font-bold text-primary-700">Upcoming: Design for Accessibility Certification</h4>
                  <p className="text-accent-700 font-mono text-sm">Fall 2025</p>
                  <p className="text-medium-contrast mt-2">Specialized training in creating accessible digital experiences for users of all abilities.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary-700 mb-6 font-mono">Skills</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-primary-700 mb-2">UX Design & Research</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">User Interviews</span>
                    <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">Usability Testing</span>
                    <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">Surveys</span>
                    <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">Wireframing</span>
                    <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">Prototyping</span>
                    <span className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-mono">User Personas</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary-700 mb-2">Development</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent-50 text-accent-600 px-2 py-1 rounded-full text-xs font-mono">React</span>
                    <span className="bg-accent-50 text-accent-600 px-2 py-1 rounded-full text-xs font-mono">Next.js</span>
                    <span className="bg-accent-50 text-accent-600 px-2 py-1 rounded-full text-xs font-mono">JavaScript/TypeScript</span>
                    <span className="bg-accent-50 text-accent-600 px-2 py-1 rounded-full text-xs font-mono">HTML/CSS</span>
                    <span className="bg-accent-50 text-accent-600 px-2 py-1 rounded-full text-xs font-mono">D3.js</span>
                    <span className="bg-accent-50 text-accent-600 px-2 py-1 rounded-full text-xs font-mono">Tailwind CSS</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary-700 mb-2">Accessibility & Inclusion</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded-full text-xs font-mono">WCAG Guidelines</span>
                    <span className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded-full text-xs font-mono">Inclusive Design</span>
                    <span className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded-full text-xs font-mono">Assistive Technology</span>
                    <span className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded-full text-xs font-mono">Color Contrast</span>
                    <span className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded-full text-xs font-mono">Screen Reader Optimization</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary-700 mb-2">Other Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-neutral-50 text-neutral-600 px-2 py-1 rounded-full text-xs font-mono">Data Visualization</span>
                    <span className="bg-neutral-50 text-neutral-600 px-2 py-1 rounded-full text-xs font-mono">Creative Coding</span>
                    <span className="bg-neutral-50 text-neutral-600 px-2 py-1 rounded-full text-xs font-mono">AI Tools</span>
                    <span className="bg-neutral-50 text-neutral-600 px-2 py-1 rounded-full text-xs font-mono">Project Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values & Mission Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm rounded-3xl px-6 md:px-10 mb-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full border border-primary-100 mb-4">
              <p className="text-sm font-mono text-primary-700">Values & Mission</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-primary-700 mb-4">What Drives My Work</h2>
            <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
              My core values shape every project I undertake and every line of code I write.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-primary-400 border-t border-r border-b border-primary-100">
              <CardContent className="p-5">
                <h3 className="font-bold text-primary-700 mb-2 font-mono">Access for All</h3>
                <p className="text-medium-contrast text-sm">
                  I'm committed to creating digital experiences that work for everyone, following WCAG guidelines and accessibility best practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-accent-400 border-t border-r border-b border-primary-100">
              <CardContent className="p-5">
                <h3 className="font-bold text-accent-700 mb-2 font-mono">Inclusion</h3>
                <p className="text-medium-contrast text-sm">
                  I design for diversity, ensuring digital spaces welcome all users by considering various perspectives, backgrounds, and needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-secondary-400 border-t border-r border-b border-primary-100">
              <CardContent className="p-5">
                <h3 className="font-bold text-secondary-700 mb-2 font-mono">Social Impact</h3>
                <p className="text-medium-contrast text-sm">
                  Technology should drive positive change. I create solutions that address real social challenges and improve lives in meaningful ways.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-l-4 border-l-neutral-400 border-t border-r border-b border-primary-100">
              <CardContent className="p-5">
                <h3 className="font-bold text-neutral-700 mb-2 font-mono">Empowerment</h3>
                <p className="text-medium-contrast text-sm">
                  I create technology that empowers users—simplifying complex tasks, providing clear information, and giving people agency in their digital interactions.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white/80 backdrop-blur-sm border border-primary-100 rounded-xl p-6 max-w-3xl mx-auto">
              <h3 className="font-bold text-primary-700 mb-4 font-mono text-xl">My Mission</h3>
              <p className="text-lg text-medium-contrast">
                To create accessible, inclusive digital experiences that forge genuine connections between people and technology—empowering users and addressing real social needs.
              </p>
            </div>
            
            <div className="mt-8">
              <Button
                variant="outline"
                size="lg"
                className="text-base border-primary-400 text-primary-700 hover:bg-primary-50"
                style={{ borderRadius: '9999px' }}
                asChild
              >
                <a href="/contact">Let's Connect</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
