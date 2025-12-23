import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'SkyWars Network',
    description: 'Complete SkyWars configuration for a network handling 500+ concurrent players. Includes custom kits, maps rotation, and economy integration.',
    tags: ['Spigot', 'SkyWars', 'Economy'],
    players: '500+',
    status: 'Completed',
  },
  {
    title: 'Survival Plus Server',
    description: 'Enhanced survival experience with custom world generation, land claims, and balanced economy. Optimized for long-term play.',
    tags: ['Paper', 'Survival', 'Claims'],
    players: '150+',
    status: 'Completed',
  },
  {
    title: 'Creative Build Hub',
    description: 'Creative server with WorldEdit optimization, plot system, and custom building tools. Focus on performance with large builds.',
    tags: ['Creative', 'WorldEdit', 'Plots'],
    players: '200+',
    status: 'Completed',
  },
  {
    title: 'RPG Adventures',
    description: 'Full RPG server setup with custom quests, dungeons, classes, and skills. Complex plugin integration for immersive gameplay.',
    tags: ['RPG', 'Quests', 'MythicMobs'],
    players: '100+',
    status: 'In Progress',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="font-pixel text-xl md:text-2xl text-center text-gradient-gold mb-4">
          PROJECTS
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Some of my recent server configurations and setups
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card-gradient border-2 border-border overflow-hidden shadow-block hover:shadow-glow transition-all duration-300 opacity-0 animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header bar */}
              <div className="h-2 bg-gradient-to-r from-grass via-gold to-diamond" />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-pixel text-sm text-foreground">{project.title}</h3>
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : 'secondary'}
                    className={project.status === 'Completed' ? 'bg-grass text-background' : 'bg-gold text-background'}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-muted border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    👥 {project.players} players
                  </span>
                  <Button variant="ghost" size="sm" className="group-hover:text-grass transition-colors">
                    Details <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
