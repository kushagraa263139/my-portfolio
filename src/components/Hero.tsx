import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import * as THREE from 'three';

const Hero = () => {
  // Remove all refs and useEffect related to Three.js
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black/30">
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="glow-text">Kushagra Agrawal</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground">
        Engineering Impact with  <span className="text-primary">Imagination </span> & <span className="text-accent">& Code</span>
        </h2>
        <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
        B.Tech Computer Science, UPES Dehradun | Designing Solutions That Matter
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToProjects}
            className="hero-button"
          >
            View My Work
          </Button>
          <Button 
            onClick={scrollToContact}
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
          >
            Let's Connect
          </Button>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;