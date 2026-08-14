import { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Spawn a handful of drifting particles once on mount
  useEffect(() => {
    const el = particlesRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const N = 12;
    const created: HTMLDivElement[] = [];
    for (let i = 0; i < N; i++) {
      const p = document.createElement('div');
      p.className = 'absolute rounded-full pointer-events-none';
      const size = 2 + Math.random() * 3;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}vw`;
      p.style.bottom = '-10px';
      p.style.background = 'hsl(var(--foreground) / 0.5)';
      p.style.boxShadow = '0 0 8px hsl(var(--primary) / 0.6)';
      const dur = 14 + Math.random() * 14;
      p.style.animation = `ff-float-up ${dur}s linear ${-Math.random() * dur}s infinite`;
      el.appendChild(p);
      created.push(p);
    }
    return () => {
      created.forEach((p) => p.remove());
    };
  }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ============ ANIMATED BACKGROUND ============ */}
      {/* Layer 1: base radial gradient wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          background:
            'radial-gradient(1200px 800px at 15% 10%, hsl(var(--primary) / 0.10), transparent 60%), radial-gradient(1000px 700px at 85% 90%, hsl(var(--accent) / 0.08), transparent 60%)',
        }}
      />

      {/* Layer 2: dot-grid texture with radial fade */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(hsl(var(--foreground) / 0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 85%)',
          maskImage:
            'radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 85%)',
        }}
      />

      {/* Layer 3: three drifting gradient orbs */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      >
        <div
          className="absolute rounded-full"
          style={{
            width: 520,
            height: 520,
            top: '-12%',
            left: '-10%',
            background:
              'radial-gradient(circle at 30% 30%, hsl(var(--primary)), transparent 70%)',
            filter: 'blur(80px)',
            mixBlendMode: 'screen',
            opacity: 0.55,
            animation: 'ff-drift-1 22s ease-in-out infinite',
            willChange: 'transform',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 480,
            height: 480,
            bottom: '-15%',
            right: '-8%',
            background:
              'radial-gradient(circle at 60% 40%, hsl(var(--accent)), transparent 70%)',
            filter: 'blur(80px)',
            mixBlendMode: 'screen',
            opacity: 0.55,
            animation: 'ff-drift-2 26s ease-in-out infinite',
            willChange: 'transform',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 380,
            height: 380,
            top: '30%',
            right: '20%',
            background:
              'radial-gradient(circle at 50% 50%, hsl(270 90% 65%), transparent 70%)',
            filter: 'blur(80px)',
            mixBlendMode: 'screen',
            opacity: 0.35,
            animation: 'ff-drift-3 30s ease-in-out infinite',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Layer 4: diagonal shimmer sweep */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      >
        <div
          className="absolute"
          style={{
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background:
              'linear-gradient(115deg, transparent 40%, hsl(var(--primary) / 0.06) 48%, hsl(var(--foreground) / 0.03) 50%, hsl(var(--accent) / 0.05) 52%, transparent 60%)',
            animation: 'ff-shimmer 12s linear infinite',
          }}
        />
      </div>

      {/* Layer 5: floating particles (populated by useEffect above) */}
      <div
        ref={particlesRef}
        aria-hidden
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      />

      {/* ============ CONTENT ============ */}
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight mt-20 md:mt-0">
            Your Creative &{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-Powered
            </span>{' '}
            Development Partner
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            At FusionFronts, we fuse artificial intelligence with modern design and advanced development to build intelligent, high-impact digital solutions for clients around the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="text-lg px-8 py-6"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Play className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold text-primary mb-2">35+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
