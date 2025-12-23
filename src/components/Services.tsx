import { Server, Wrench, Zap, Shield } from 'lucide-react';

const services = [
  {
    icon: Server,
    title: 'Server Setup',
    description: 'I configure servers from the ground up with optimized settings tailored to your player count and gameplay goals.',
    color: 'grass',
  },
  {
    icon: Wrench,
    title: 'Plugin Configuration',
    description: 'Custom plugin configurations that align with your server vision, ensuring seamless integration and gameplay.',
    color: 'gold',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'I fine-tune server performance to maximize TPS and minimize lag for the smoothest experience possible.',
    color: 'diamond',
  },
  {
    icon: Shield,
    title: 'Security Setup',
    description: 'Comprehensive anti-cheat and protection configurations to keep your server and players safe.',
    color: 'redstone',
  },
];

const colorClasses = {
  grass: 'border-grass/50 text-grass',
  gold: 'border-gold/50 text-gold',
  diamond: 'border-diamond/50 text-diamond',
  redstone: 'border-redstone/50 text-redstone',
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground text-center mb-3">
          What I Do
        </p>
        <h2 className="font-pixel text-lg md:text-xl text-center text-foreground mb-16">
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card border border-border p-8 hover:border-grass/30 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 flex items-center justify-center border mb-6 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="text-foreground font-medium text-lg mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
