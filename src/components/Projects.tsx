import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'SkyWars Network',
    description: 'Configured a complete SkyWars setup for a network handling 500+ concurrent players, including custom kits, automated map rotation, and full economy integration.',
    tags: ['Spigot', 'SkyWars', 'Economy'],
    players: '500+',
    status: 'Completed',
  },
  {
    title: 'Survival Plus Server',
    description: 'Built an enhanced survival experience with custom world generation, intuitive land claims, and a balanced economy designed for long-term player retention.',
    tags: ['Paper', 'Survival', 'Claims'],
    players: '150+',
    status: 'Completed',
  },
  {
    title: 'Creative Build Hub',
    description: 'Developed a creative server with WorldEdit optimization, efficient plot system, and custom building tools focused on performance with large-scale builds.',
    tags: ['Creative', 'WorldEdit', 'Plots'],
    players: '200+',
    status: 'Completed',
  },
  {
    title: 'RPG Adventures',
    description: 'Currently building a full RPG experience with custom quests, dungeons, class systems, and skills. Complex plugin integration for immersive gameplay.',
    tags: ['RPG', 'Quests', 'MythicMobs'],
    players: '100+',
    status: 'In Progress',
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
                  className={project.status === 'Completed' 
                    ? 'border-grass/50 text-grass text-xs' 
                    : 'border-gold/50 text-gold text-xs'}
                >
                  {project.status}
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-xs text-muted-foreground/70">
                {project.players} concurrent players
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
