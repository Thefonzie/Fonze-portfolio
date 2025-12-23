import { Server, Wrench, Zap, Shield } from 'lucide-react';

const services = [
  {
    icon: Server,
    title: 'Server Setup',
    description: 'Complete server configuration from scratch with optimized settings for any player count.',
    color: 'grass',
  },
  {
    icon: Wrench,
    title: 'Plugin Config',
    description: 'Custom plugin configurations tailored to your server needs and gameplay style.',
    color: 'gold',
  },
  {
    icon: Zap,
    title: 'Optimization',
    description: 'Performance tuning to maximize TPS and minimize lag for smooth gameplay.',
    color: 'diamond',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Anti-cheat setup and protection configurations to keep your server safe.',
    color: 'redstone',
  },
];

const colorClasses = {
  grass: 'border-grass bg-grass/10 text-grass',
  gold: 'border-gold bg-gold/10 text-gold',
  diamond: 'border-diamond bg-diamond/10 text-diamond',
  redstone: 'border-redstone bg-redstone/10 text-redstone',
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="font-pixel text-xl md:text-2xl text-center text-gradient-grass mb-4">
          SERVICES
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Everything you need to build the perfect Minecraft server
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card-gradient border-2 border-border p-6 shadow-block hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 flex items-center justify-center border-2 mb-4 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-pixel text-xs text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
