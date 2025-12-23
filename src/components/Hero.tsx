import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* Subtle decorative elements */}
      <div className="absolute top-32 left-16 w-3 h-3 bg-grass/20 rotate-45" />
      <div className="absolute top-48 right-24 w-2 h-2 bg-gold/20 rotate-12" />
      <div className="absolute bottom-48 left-24 w-4 h-4 bg-diamond/15 rotate-45" />

      <div className="text-center z-10 animate-fade-in max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Minecraft Server Specialist
        </p>

        <h1 className="font-pixel text-xl md:text-3xl lg:text-4xl text-foreground mb-6 leading-relaxed">
          Hi, I'm <span className="text-gradient-grass">Your Name</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
          I craft high-performance Minecraft servers with custom configurations, 
          plugin setups, and optimizations that deliver exceptional gameplay experiences.
        </p>
        
        <p className="text-sm text-muted-foreground/70 mb-12">
          5+ years helping server owners build thriving communities
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="pixel" size="xl" onClick={scrollToProjects}>
            VIEW MY WORK
          </Button>
          <Button variant="outline" size="xl" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-grass/50" />
      </div>
    </section>
  );
};

export default Hero;
