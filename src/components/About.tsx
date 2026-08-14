import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, Target, Users, Award, Sparkles } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Sparkles className="h-8 w-8 text-accent" />,
      title: "AI-Driven Innovation",
      description: "We build with artificial intelligence at the core — from intelligent automation to AI-enhanced user experiences that adapt to your customers."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Mission-Driven",
      description: "Committed to delivering exceptional, AI-powered digital solutions that drive business growth and success."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Client-Focused",
      description: "Building long-term partnerships through transparent communication and dedicated support."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Quality First",
      description: "Maintaining the highest standards in every project, blending AI precision with human craft and attention to detail."
    }
  ];

  const achievements = [
    "50+ successful projects delivered worldwide",
    "100% client satisfaction rate maintained",
    "AI-powered automation and intelligent chatbot integrations for growing businesses",
    "Full-featured card marketplace platform development",
    "Complete branding packages for growing businesses",
    "Interactive SaaS dashboards and mobile app designs",
    "Professional business websites for startups"
  ];

  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">FusionFronts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're an AI-driven creative and technology agency that believes in the power of intelligent design, 
            automation, and results. With years of industry experience, we've built a reputation for delivering 
            AI-powered digital solutions that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              FusionFronts was founded with a simple vision: to fuse artificial intelligence with modern design and 
              cutting-edge development to create digital experiences that truly make a difference. Over the years, 
              we've grown from a small team of passionate developers, designers, and AI engineers into a trusted 
              partner for businesses worldwide.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our approach combines AI-driven innovation with technical expertise, ensuring that every project we 
              deliver is not only intelligent and adaptive but also performs exceptionally. From AI-powered 
              applications, automation, and machine learning integrations to branding and complex web platforms, 
              we're here to bring your vision to life.
            </p>

            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-medium"
              >
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <div className="mr-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-secondary rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're a startup, small business, or entrepreneur, FusionFronts is your trusted 
            AI-powered partner for digital success. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm border border-primary/30">
              AI-Powered Innovation
            </span>
            <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm border border-accent/30">
              Creative Excellence
            </span>
            <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm border border-primary/30">
              Technical Expertise
            </span>
            <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm border border-accent/30">
              Proven Results
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
