import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import BackgroundEffect from "@/components/BackgroundEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BackgroundEffect />
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background/50 border-t border-border/50 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Kushagra Agrawal. Built with ❤️ using React & Three.js
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
