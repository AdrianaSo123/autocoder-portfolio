'use client';

import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '@/lib/emailjs';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name === 'user_name' ? 'name' : 
                     e.target.name === 'user_email' ? 'email' : 'message';
    
    setFormState({
      ...formState,
      [fieldName]: e.target.value,
    });
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    if (!formRef.current) return;
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);
      
      // Send the email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current
      );
      
      console.log('Email successfully sent!', result.text);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    } catch (err: any) {
      console.error('Failed to send email:', err);
      setError(err.text || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
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

      {/* Main Section */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-16 pb-4 px-4 mt-[72px]">
        <div className="backdrop-blur-xl bg-white/70 border border-primary-100 rounded-2xl shadow-2xl p-5 max-w-2xl w-full text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold font-mono text-primary mb-2 drop-shadow-md">Let's Work Together</h1>
          <p className="text-base md:text-lg text-foreground/80 font-sans mb-3">
            Looking for a developer with a passion for UX? I'm currently available for freelance projects and full-time opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-mono">Frontend Development</span>
            <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full font-mono">UX Design</span>
            <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full font-mono">Data Visualization</span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="flex-1 w-full max-w-3xl mx-auto px-4 pb-16 relative z-10">
        <Card className="backdrop-blur-xl bg-white/90 border border-primary-100 shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-mono text-primary-700">Start Your Project</CardTitle>
            <CardDescription>Tell me about your project or opportunity and I'll get back to you with ideas on how we can work together.</CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">Message Sent!</h3>
                <p className="text-medium-contrast mb-6">Thank you for reaching out. I'll respond to your message soon.</p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                  <Input
                    id="name"
                    name="user_name" // This name must match your EmailJS template variable
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                  <Input
                    id="email"
                    name="user_email" // This name must match your EmailJS template variable
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="bg-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                  <Textarea
                    id="message"
                    name="message" // This name must match your EmailJS template variable
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    className="bg-white"
                  />
                </div>
                
                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                    {error}
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary-400 to-accent-400 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Professional Info & CTA Section */}
      <section className="w-full max-w-3xl mx-auto px-4 pb-12 relative z-10">
        <Card className="backdrop-blur-xl bg-white/90 border border-primary-100 border-l-4 border-l-accent-400 mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold font-mono text-primary-700 mb-3">Professional Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-medium-contrast">Frontend development with React, Next.js, and modern JavaScript</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-medium-contrast">UX research, wireframing, and prototyping</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-medium-contrast">Interactive data visualizations and dashboards</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold font-mono text-primary-700 mb-3">Availability</h3>
                <p className="text-medium-contrast mb-4">Currently available for:</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-medium-contrast">Freelance projects</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-medium-contrast">Contract work</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-medium-contrast">Full-time opportunities</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-primary-100 text-center">
              <Button 
                className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-2 rounded-full text-base font-medium"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discuss Your Project Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="backdrop-blur-xl bg-white/90 border border-primary-100">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-700 mb-2">Email</h3>
                <a href="mailto:contact@sokindux.com" className="text-medium-contrast hover:text-primary-600 transition-colors">
                  contact@sokindux.com
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="backdrop-blur-xl bg-white/90 border border-primary-100">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-700 mb-2">Social</h3>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-medium-contrast hover:text-primary-600 transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-medium-contrast hover:text-primary-600 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="backdrop-blur-xl bg-white/90 border border-primary-100">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-700 mb-2">Response Time</h3>
                <p className="text-medium-contrast">
                  Usually within 24-48 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
