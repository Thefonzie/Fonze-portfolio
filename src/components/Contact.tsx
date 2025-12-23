import { Button } from '@/components/ui/button';
import { MessageSquare, Mail, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container max-w-2xl mx-auto text-center">
        <h2 className="font-pixel text-xl md:text-2xl text-gradient-grass mb-4">
          GET IN TOUCH
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Ready to level up your Minecraft server? Let's discuss your project and create something amazing together.
        </p>

        <div className="bg-card-gradient border-2 border-border p-8 shadow-block mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="#"
              className="flex flex-col items-center p-4 border-2 border-border hover:border-grass hover:bg-grass/5 transition-all duration-200 group"
            >
              <MessageSquare className="w-8 h-8 text-muted-foreground group-hover:text-grass transition-colors mb-2" />
              <span className="font-pixel text-xs text-foreground">Discord</span>
              <span className="text-xs text-muted-foreground">@username</span>
            </a>
            
            <a
              href="mailto:hello@example.com"
              className="flex flex-col items-center p-4 border-2 border-border hover:border-gold hover:bg-gold/5 transition-all duration-200 group"
            >
              <Mail className="w-8 h-8 text-muted-foreground group-hover:text-gold transition-colors mb-2" />
              <span className="font-pixel text-xs text-foreground">Email</span>
              <span className="text-xs text-muted-foreground">hello@example.com</span>
            </a>
            
            <a
              href="#"
              className="flex flex-col items-center p-4 border-2 border-border hover:border-diamond hover:bg-diamond/5 transition-all duration-200 group"
            >
              <Github className="w-8 h-8 text-muted-foreground group-hover:text-diamond transition-colors mb-2" />
              <span className="font-pixel text-xs text-foreground">GitHub</span>
              <span className="text-xs text-muted-foreground">@username</span>
            </a>
          </div>
        </div>

        <Button variant="pixel" size="xl">
          START A PROJECT
        </Button>
      </div>
    </section>
  );
};

export default Contact;
