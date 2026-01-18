import { Button } from '@/components/ui/button';
import { MessageSquare, Mail, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container max-w-2xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Contact
        </p>
        <h2 className="font-pixel text-lg md:text-xl text-foreground mb-4">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto text-sm leading-relaxed">
          Have a server project in mind? I'd love to hear about it. 
          Reach out and let's discuss how I can help bring your vision to life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <a
            href="https://discord.com/users/Thefonze"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-card border border-border hover:border-grass/30 transition-all duration-200 group"
          >
            <MessageSquare className="w-6 h-6 text-muted-foreground group-hover:text-grass transition-colors mb-3" />
            <span className="text-sm text-foreground mb-1">Discord</span>
            <span className="text-xs text-muted-foreground">@Thefonze</span>
          </a>
          
          <a
            href="mailto:mc.thefonze@gmail.com"
            className="flex flex-col items-center p-6 bg-card border border-border hover:border-gold/30 transition-all duration-200 group"
          >
            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors mb-3" />
            <span className="text-sm text-foreground mb-1">Email</span>
            <span className="text-xs text-muted-foreground">mc.thefonze@gmail.com</span>
          </a>
          
          <a
            href="https://github.com/Thefonzie"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-card border border-border hover:border-diamond/30 transition-all duration-200 group"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-diamond transition-colors mb-3" />
            <span className="text-sm text-foreground mb-1">GitHub</span>
            <span className="text-xs text-muted-foreground">@Thefonzie</span>
          </a>
        </div>

        <a href="https://discord.gg/46gUvUNq4m" target="_blank" rel="noopener noreferrer">
          <Button variant="pixel" size="lg">
            START A PROJECT
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
