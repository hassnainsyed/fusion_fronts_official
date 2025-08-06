const TechStack = () => {
    const technologies = [
      {
        name: "React.js",
        category: "Frontend Framework",
        logo: "⚛️"
      },
      {
        name: "TypeScript",
        category: "Programming Language",
        logo: "🔷"
      },
      {
        name: "Tailwind CSS",
        category: "CSS Framework",
        logo: "🎨"
      },
      {
        name: "Next.js",
        category: "React Framework",
        logo: "▲"
      },
      {
        name: "Node.js",
        category: "Runtime Environment",
        logo: "🟢"
      },
      {
        name: "Figma",
        category: "Design Tool",
        logo: "🎭"
      },
      {
        name: "Adobe Creative Suite",
        category: "Design Suite",
        logo: "🎯"
      },
      {
        name: "Git",
        category: "Version Control",
        logo: "📚"
      },
      {
        name: "Vite",
        category: "Build Tool",
        logo: "⚡"
      },
      {
        name: "HTML5",
        category: "Markup Language",
        logo: "🌐"
      },
      {
        name: "CSS3",
        category: "Styling",
        logo: "🎨"
      },
      {
        name: "JavaScript",
        category: "Programming Language",
        logo: "💛"
      }
    ];
  
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Tech Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We use the latest technologies and tools to deliver cutting-edge solutions that scale with your business.
            </p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-medium group cursor-pointer bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tech.category}
                </p>
              </div>
            ))}
          </div>
  
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Always learning and adapting to new technologies to stay ahead of the curve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                Modern Stack
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
                Best Practices
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                Performance Focused
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
                Scalable Solutions
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TechStack;