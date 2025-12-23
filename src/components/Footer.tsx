const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
        <div className="text-xs text-muted-foreground">
          Crafting exceptional Minecraft experiences
        </div>
      </div>
    </footer>
  );
};

export default Footer;
