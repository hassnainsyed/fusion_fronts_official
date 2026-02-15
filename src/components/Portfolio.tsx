import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import namaz360 from  '@/assets/namaz360.png'
import reactToastify from '@/assets/react-toastify.png'
import cardMarket from '@/assets/cardMarket.png'

const Portfolio = () => {
  const projects = [
    {
      title: "React Native Toastify",
      description:
        "A highly popular React Native toast notification library with over 20 million downloads worldwide, offering customizable and user-friendly alerts for mobile apps.",
      image: reactToastify,
      tags: ["React Native", "Library", "UI/UX", "Notifications"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Namaz 360 App",
      description:
        "A full-fledged Islamic app with namaz alerts, Quran access, Hadith collections, and Islamic books management — designed for global users.",
      image: namaz360,
      tags: ["React Native", "Mobile App", "Islamic", "Productivity"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Card Marketplace Platform",
      description:
        "A full-featured marketplace with buy/sell interface, user dashboard, and responsive UI. Built with React.js and modern design principles.",
      image: cardMarket,
      tags: ["React.js", "UI/UX", "E-commerce", "Responsive"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "SaaS Dashboard Design",
      description:
        "Interactive UI/UX designs for SaaS dashboards and mobile apps with focus on user experience and functionality.",
      image: portfolio1,
      tags: ["UI/UX", "Dashboard", "SaaS", "Mobile"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];  

  return (
    <section id="portfolio" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-large group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
