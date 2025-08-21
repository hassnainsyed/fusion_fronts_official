import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Star, Quote } from "lucide-react";
import portfolio1 from '@/assets/portfolio-1.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content:
        "FusionFronts delivered exactly what we needed - a modern, responsive website that perfectly represents our brand. Their attention to detail and professionalism exceeded our expectations.",
      rating: 5,
      image: portfolio1,
    },
    {
      name: "Michael Chen",
      company: "Digital Solutions Co.",
      role: "CTO",
      content:
        "The team at FusionFronts transformed our outdated platform into a cutting-edge application. Their technical expertise and creative approach made all the difference.",
      rating: 5,
      image: portfolio1,
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      role: "Design Director",
      content:
        "Working with FusionFronts was a game-changer for our business. They created a comprehensive branding package that truly captured our vision and elevated our market presence.",
      rating: 5,
      image: portfolio1,
    },
    {
      name: "David Thompson",
      company: "E-commerce Plus",
      role: "Founder",
      content:
        "Our marketplace platform has been a huge success thanks to FusionFronts. The user experience they designed is intuitive and the functionality is flawless.",
      rating: 5,
      image: portfolio1,
    },
    {
      name: "Lisa Wang",
      company: "Healthcare Innovations",
      role: "Product Manager",
      content:
        "FusionFronts understood our complex requirements and delivered a solution that not only met but exceeded our goals. Their expertise in UI/UX design is outstanding.",
      rating: 5,
      image: portfolio1,
    },
    {
      name: "Alex Kumar",
      company: "Startup Ventures",
      role: "Operations Director",
      content:
        "From concept to launch, FusionFronts guided us through every step. Their strategic approach and technical skills helped us launch successfully in a competitive market.",
      rating: 5,
      image: portfolio1,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with FusionFronts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-large group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                <Quote className="absolute top-0 right-0 h-8 w-8 text-primary/20" />
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-border shadow-sm"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
