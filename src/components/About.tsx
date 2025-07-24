const About = () => {
  const skills = [
    { category: "Programming Languages", items: ["Python", "Java", "JavaScript","TypeScript"] },
    { category: "Frameworks & Libraries", items: ["React", "Node.js"] },
    { category: "Tools & Technologies", items: ["Git", "MongoDB",] },
    { category: "Concepts", items: ["Data Structures", "Algorithms", "Machine Learning", "Web Development"] }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="glow-text">Kushagra</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">My Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Curiosity drives me as a Computer Science Engineering student passionate about creating digital solutions that deliver real value. Since my first “Hello, World!” I’ve focused on applying theory to practice, exploring web development and machine learning through hands-on projects that challenge and grow my skills.I'm a passionate B.Tech Computer Science Engineering student at UPES Dehradun, driven by an insatiable curiosity for technology and its potential to solve real-world problems. My journey in the world of computing began with a simple "Hello, World!" and has evolved into a deep fascination with creating innovative digital solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            I approach problem-solving with a user-centered mindset—crafting not just code, but meaningful experiences. Whether building intuitive web platforms or optimizing algorithms, my goal is to solve real-world problems with creativity, clarity, and purpose.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            I’m eager for opportunities that encourage growth, collaboration, and impact. If you believe in the power of technology to change lives, let’s connect and build that future together.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="portfolio-card">
                  <h4 className="text-lg font-semibold mb-3 text-accent">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;