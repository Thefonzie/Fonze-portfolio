const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t-2 border-border">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-pixel text-xs text-muted-foreground">
          © 2024 MINECRAFT CONFIG
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Made with</span>
          <span className="text-redstone">❤</span>
          <span>and lots of</span>
          <span className="text-grass">⛏️</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
