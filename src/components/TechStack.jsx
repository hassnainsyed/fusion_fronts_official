import { FaReact, FaNodeJs, FaFigma, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa6";
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiVite, SiRubyonrails,
} from "react-icons/si";
import { Bot, Sparkles, Brain, Cpu } from "lucide-react";

const TechStack = () => {

  const technologies = [
    {
      name: "OpenAI API",
      category: "AI Integration",
      logo: <Bot className="w-12 h-12 text-emerald-500" />
    },
    {
      name: "LangChain",
      category: "AI Framework",
      logo: <Sparkles className="w-12 h-12 text-purple-500" />
    },
    {
      name: "Python",
      category: "AI & Machine Learning",
      logo: <Brain className="w-12 h-12 text-yellow-500" />
    },
    {
      name: "TensorFlow",
      category: "Machine Learning",
      logo: <Cpu className="w-12 h-12 text-orange-500" />
    },
    {
      name: "React.js",
      category: "Frontend Framework",
      logo: <FaReact className="w-12 h-12 text-sky-500" />
    },
    {
      name: "TypeScript",
      category: "Programming Language",
      logo: <SiTypescript className="w-12 h-12 text-blue-600" />
    },
    {
      name: "Tailwind CSS",
      category: "CSS Framework",
      logo: <SiTailwindcss className="w-12 h-12 text-sky-400" />
    },
    {
      name: "Next.js",
      category: "React Framework",
      logo: <SiNextdotjs className="w-12 h-12 text-black dark:text-white" />
    },
    {
      name: "Node.js",
      category: "Runtime Environment",
      logo: <FaNodeJs className="w-12 h-12 text-green-600" />
    },
    {
      name: "Ruby on Rails",
      category: "Backend Framework",
      logo: <SiRubyonrails className="w-12 h-12 text-red-600" />
    },
    {
      name: "Figma",
      category: "Design Tool",
      logo: <FaFigma className="w-12 h-12 text-pink-500" />
    },
    {
      name: "Git",
      category: "Version Control",
      logo: <FaGitAlt className="w-12 h-12 text-orange-600" />
    },
    {
      name: "Vite",
      category: "Build Tool",
      logo: <SiVite className="w-12 h-12 text-purple-500" />
    },
    {
      name: "HTML5",
      category: "Markup Language",
      logo: <FaHtml5 className="w-12 h-12 text-orange-500" />
    },
    {
      name: "CSS3",
      category: "Styling",
      logo: <FaCss3Alt className="w-12 h-12 text-blue-500" />
    },
    {
      name: "JavaScript",
      category: "Programming Language",
      logo: <FaJs className="w-12 h-12 text-yellow-500" />
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
            We use the latest technologies, frameworks, and AI tools to deliver cutting-edge, intelligent solutions that scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-medium group cursor-pointer bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-primary">
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
            Always learning and adapting to new technologies — especially in AI — to stay ahead of the curve.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
              AI-Powered
            </span>
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
