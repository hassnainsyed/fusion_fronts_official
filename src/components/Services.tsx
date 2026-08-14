import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

import { Palette, Code, Smartphone, Globe, Layers, Zap, Bot } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Bot className="h-12 w-12 text-accent" />,
      title: "AI & Automation Solutions",
      description: "We integrate AI, machine learning, and intelligent automation into your products — from smart chatbots to workflow automation that saves time and unlocks smarter decisions."
    },
    {
      icon: <Palette className="h-12 w-12 text-primary" />,
      title: "Software Development",
      description: "Custom web and mobile applications built with modern technologies and AI-assisted development practices to streamline workflows, enhance user experiences, and scale your business."
    },
    {
      icon: <Code className="h-12 w-12 text-accent" />,
      title: "Frontend Development",
      description: "Modern, AI-enhanced applications with responsive design and cutting-edge development practices."
    },
    {
      icon: <Palette className="h-12 w-12 text-primary" />,
      title: "Graphic Design",
      description: "Creative logos, brand identity, and marketing assets that make your business stand out in the crowd."
    },
    {
      icon: <Layers className="h-12 w-12 text-primary" />,
      title: "UI/UX Design",
      description: "User-centered design approaches, informed by AI-driven insights, with wireframes, prototypes, and intuitive interface design."
    },
    {
      icon: <Globe className="h-12 w-12 text-accent" />,
      title: "Web Development",
      description: "Full-featured websites and platforms with seamless user experiences and modern, intelligent functionality."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Mobile-First Design",
      description: "Responsive designs that work perfectly across all devices and screen sizes."
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive, AI-powered digital solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-large group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
