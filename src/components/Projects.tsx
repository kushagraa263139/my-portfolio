import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const projects = [
    // {
    //   title: "Smart Home Automation System",
    //   description: "An IoT-based smart home solution with real-time monitoring and control capabilities.",
    //   role: "Full Stack Developer",
    //   technologies: ["Python", "Flask", "React", "Arduino", "MQTT"],
    //   features: [
    //     "Real-time sensor data monitoring",
    //     "Mobile-responsive web interface",
    //     "Automated device control based on conditions"
    //   ],
    //   demoLink: "#",
    //   githubLink: "#",
    //   image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop"
    // },
    // {
    //   title: "E-commerce Backend API",
    //   description: "A scalable RESTful API for e-commerce applications with advanced features.",
    //   role: "Backend Developer",
    //   technologies: ["Java", "Spring Boot"],
    //   features: [
    //     "JWT-based authentication system",
    //     "Redis caching for performance optimization",
    //     "Comprehensive order management system"
    //   ],
    //   demoLink: "#",
    //   githubLink: "#",
    //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    // },
    {
      title: "AI-Powered Website Generator",
      description: "A machine learning platform that generates websites",
      role: "ML Engineer & Frontend Developer",
      technologies: ["Python", "React", "Node.js","Tailwind CSS"],
      features: [
        "Personalized websites generation",
        "AI-powered content creation",
        "User-friendly interface",
        "Responsive design"
      ],
      demoLink: "https://websgenerator.netlify.app/",
      githubLink: "https://github.com/kushagraa263139/website-generator",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    },
    // {
    //   title: "Cybersecurity Threat Detection",
    //   description: "A network security tool that detects and analyzes potential cyber threats.",
    //   role: "Security Analyst & Developer",
    //   technologies: ["C++", "Python", "Wireshark", "Linux", "Machine Learning"],
    //   features: [
    //     "Real-time network traffic analysis",
    //     "Anomaly detection algorithms",
    //     "Automated threat reporting"
    //   ],
    //   demoLink: "#",
    //   githubLink: "#",
    //   image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
    // },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with 3D animations and interactive elements.",
      role: "Full Stack Designer & Developer",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Three.js", "Vite"],
      features: [
        "Interactive 3D background animations",
        "Responsive design across all devices",
        "Modern UI/UX with smooth transitions"
      ],
      demoLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="glow-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of projects that demonstrate my passion for innovation, problem-solving, and technical excellence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card group">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                  <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {project.role}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-accent mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <a 
                    href={project.demoLink}
                    className="flex-1 bg-primary/10 text-primary text-center py-2 px-4 rounded-xl hover:bg-primary/20 transition-colors duration-300 text-sm font-medium"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    className="flex-1 bg-secondary/50 text-secondary-foreground text-center py-2 px-4 rounded-xl hover:bg-secondary/70 transition-colors duration-300 text-sm font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in collaborating or learning more about these projects?
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="hero-button"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;