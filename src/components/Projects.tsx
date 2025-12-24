import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'HeartHeist',
    description: 'A Lifesteal-based server where I currently work as a Developer, handling plugin configuration and server optimization.',
    tags: ['Lifesteal', 'Developer'],
    role: 'Developer',
    status: 'Present',
  },
  {
    title: 'SolarityMC',
    description: 'A Gens SMP server where I serve as Developer, responsible for plugin setup and server maintenance.',
    tags: ['Gens', 'SMP', 'Developer'],
    role: 'Developer',
    status: 'Present',
  },
  {
    title: 'Elmlands',
    description: 'An SMP that I owned and developed with many custom features and plugins. Within the first day of release, it generated nearly $2,000 in revenue.',
    tags: ['SMP', 'Custom Plugins', 'Owner'],
    role: 'Owner / Developer',
    status: 'Completed',
  },
  {
    title: 'Oneblock Odyssey',
    description: 'A oneblock server with many custom features. I was in charge of creating and configuring the entire server in just under a week.',
    tags: ['Oneblock', 'Custom Features'],
    role: 'Developer',
    status: 'Completed',
  },
  {
    title: 'PirateMC',
    description: 'A heavily modified version of SuperiorSkyblock2 featuring island raiding, custom GUIs, and numerous custom features.',
    tags: ['Skyblock', 'SuperiorSkyblock2', 'Custom GUIs'],
    role: 'Admin / Developer',
    status: 'Completed',
  },
  {
    title: 'RizzNetwork',
    description: 'A box server based on Minehut where I managed stability, updates, and staff management.',
    tags: ['Minehut', 'Box Server', 'Management'],
    role: 'Development Manager',
    status: 'Completed',
  },
  {
    title: 'Rewind Box',
    description: 'An elytra box server where I handled plugin configuration and server development.',
    tags: ['Elytra', 'Box Server'],
    role: 'Developer',
    status: 'Completed',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/20">
      <div className="container max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground text-center mb-3">
          Portfolio
        </p>
        <h2 className="font-pixel text-lg md:text-xl text-center text-foreground mb-4">
          Recent Projects
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto text-sm">
          A selection of server configurations I've completed for clients
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card border border-border p-6 hover:border-grass/30 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-foreground font-medium">{project.title}</h3>
                <Badge 
                  variant="outline"
                  className={project.status === 'Present' 
                    ? 'border-grass/50 text-grass text-xs' 
                    : 'border-muted-foreground/50 text-muted-foreground text-xs'}
                >
                  {project.status}
                </Badge>
              </div>

              <p className="text-xs text-gold/80 mb-3">{project.role}</p>
              
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
