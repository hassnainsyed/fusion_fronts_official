import { Building2, ShoppingCart, CreditCard, Truck, Heart, GraduationCap, Home, Briefcase } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce",
      description: "Online stores and marketplaces"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "FinTech",
      description: "Financial services and applications"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Healthcare",
      description: "Medical platforms and solutions"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics",
      description: "Supply chain and delivery services"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education",
      description: "Learning management systems"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Real Estate",
      description: "Property management platforms"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Enterprise",
      description: "Corporate solutions and dashboards"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Startups",
      description: "Innovative business solutions"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industries We <span className="bg-gradient-primary bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our expertise spans across multiple industries, delivering tailored solutions for diverse business needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-medium group cursor-pointer bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-4 text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                {industry.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {industry.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;