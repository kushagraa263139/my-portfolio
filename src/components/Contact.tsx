import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="glow-text">Connect!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hello, 
            I'd love to hear from you. Let's create something amazing together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kushagra-agrawal-047370376" target="_blank" rel="noopener noreferrer" className="portfolio-card text-center group block focus:outline-none focus:ring-2 focus:ring-primary">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-muted-foreground mb-4">Let's connect professionally</p>
          </a>

          {/* GitHub */}
          <a href="https://github.com/kushagraa263139" target="_blank" rel="noopener noreferrer" className="portfolio-card text-center group block focus:outline-none focus:ring-2 focus:ring-primary">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <p className="text-muted-foreground mb-4">Check out my code</p>
          </a>

          {/* LeetCode */}
          <a href="https://leetcode.com/u/kushagraa685/" target="_blank" rel="noopener noreferrer" className="portfolio-card text-center group block focus:outline-none focus:ring-2 focus:ring-primary">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
              <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.518 2.524 8.117.96 2.04-1.226 2.997-3.508 2.997-5.993l.017-9.227c0-.784-.57-1.271-1.271-1.271-.701 0-1.271.487-1.271 1.271l-.017 9.227c0 1.577-.606 2.957-1.618 3.649-1.271.867-3.01.623-4.012-.349l-4.277-4.193a2.495 2.495 0 0 1-.533-.757 2.42 2.42 0 0 1-.145-.421 2.476 2.476 0 0 1-.026-.998 2.24 2.24 0 0 1 .513-.895l3.854-4.126 5.406-5.788a1.374 1.374 0 0 0-.961-.438z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">LeetCode</h3>
            <p className="text-muted-foreground mb-4">DSA Problem Solving</p>
          </a>
        </div>

        {/* Additional Contact Info */}
        <div className="portfolio-card">
          <h3 className="text-2xl font-semibold mb-6 text-center">Ready to Start a Conversation?</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-lg font-semibold text-accent mb-3">🚀 Looking for Opportunities</h4>
              <ul className="text-muted-foreground space-y-2">
                <li>• Internship positions in software development</li>
                <li>• Open source collaboration projects</li>
                <li>• Research opportunities in AI/ML</li>
                <li>• Hackathon team collaborations</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-accent mb-3">💡 Let's Discuss</h4>
              <ul className="text-muted-foreground space-y-2">
                <li>• Innovative project ideas</li>
                <li>• Technical challenges and solutions</li>
                <li>• Latest trends in technology</li>
                <li>• Student life at UPES Dehradun</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={() => navigate('/contact')}
              className="hero-button"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;