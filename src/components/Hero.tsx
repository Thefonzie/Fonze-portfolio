import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* Decorative blocks */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-grass/30 rotate-12 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-6 h-6 bg-gold/30 -rotate-6 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-10 h-10 bg-diamond/20 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-10 w-4 h-4 bg-redstone/30 rotate-12 animate-float" style={{ animationDelay: '0.5s' }} />

      <div className="text-center z-10 animate-fade-in">
        {/* Pixel art icon */}
        <div className="w-24 h-24 mx-auto mb-8 bg-card-gradient border-4 border-grass shadow-block flex items-center justify-center">
          <span className="text-4xl">⛏️</span>
        </div>

        <h1 className="font-pixel text-2xl md:text-4xl lg:text-5xl text-gradient-grass mb-6 leading-relaxed">
          MINECRAFT CONFIG
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          Custom server configurations, plugins setup, and optimization
        </p>
        
        <p className="text-muted-foreground mb-12">
          Crafting perfect server experiences since 2020
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="pixel" size="xl" onClick={scrollToProjects}>
            VIEW PROJECTS
          </Button>
          <Button variant="outline" size="xl" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-grass" />
      </div>
    </section>
  );
};

export default Hero;
