import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Hassnain from '@/assets/syed_hassnain.jpg';
import Hussain from '@/assets/hussain.jpg';
import Raza from '@/assets/razah.jpeg';
import Armughan from '@/assets/armughan.jpeg';
import Rafay from '@/assets/rafay.jpeg';

const Team = () => {
  const autoplay = useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      skipSnaps: false,
      dragFree: true,
    },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const teamMembers = [
    {
      id: 1,
      name: "Syed Hassnain",
      designation: "CEO & Founder",
      image: Hassnain,
      linkedin: "https://www.linkedin.com/in/syed-hassnain/",
      twitter: "#"
    },
    {
      id: 2,
      name: "Raza Haider",
      designation: "CTO & Lead Developer",
      image: Raza,
      linkedin: "https://www.linkedin.com/in/razah1214/",
      twitter: "#"
    },
    {
      id: 3,
      name: "Syed Hussain Iqrar",
      designation: "Senior Frontend Developer",
      image: Hussain,
      linkedin: "https://www.linkedin.com/in/syed-hussain-iqrar-71388b236/",
      twitter: "#"
    },
    {
      id: 4,
      name: "Armughan Javed",
      designation: "Product Manager",
      image: Armughan,
      linkedin: "https://www.linkedin.com/in/m-armughan-javed-9674b81b6/",
      twitter: "#"
    },
    {
      id: 5,
      name: "Rafay Shafqat",
      designation: "AI Engineer",
      image: Rafay,
      linkedin: "https://www.linkedin.com/in/rafay-khokhar/",
      twitter: "#"
    },
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
      <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The passionate minds behind our innovative solutions. Meet the experts who turn your ideas into reality.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-border hover:border-primary/50"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-border hover:border-primary/50"
              onClick={scrollNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Embla Carousel */}
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              {teamMembers.map((member) => (
                <div key={member.id} className="embla__slide flex-[0_0_300px] min-w-0">
                  <div className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-medium">
                    <div className="relative mb-6">
                      <div className="w-full h-64 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {member.designation}
                      </p>
                      
                      <div className="flex justify-center gap-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 rounded-full hover:bg-primary/10"
                          asChild
                        >
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 rounded-full hover:bg-primary/10"
                          asChild
                        >
                          <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Our diverse team brings together expertise from various domains to deliver exceptional results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
              Experienced
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
              Collaborative
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
              Innovative
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
              Dedicated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
