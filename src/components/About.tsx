const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground text-center mb-3">
          About Me
        </p>
        <h2 className="font-pixel text-lg md:text-xl text-center text-foreground mb-12">
          Who I Am
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Hello there, I'm <span className="text-grass font-medium">Fonze</span>, and I specialize in server and plugin configuration. My experience in this field dates back to early 2021 when I publicly released my own Minecraft server. However, I soon realized that owning a server wasn't my thing; instead, I discovered a passion for server development.
          </p>

          <div className="border-l-2 border-grass/30 pl-6 my-8">
            <h3 className="text-foreground font-medium mb-4">My Approach</h3>
            <p className="mb-4">
              As someone passionate about plugin configuration, I do my best to match your needs. I'm active, helpful and if you encounter any issues, I will be there to assist you. I approach every project with enthusiasm, dedication and attention to detail.
            </p>
            <p className="mb-4">
              Regardless of which plugin you're using, I'm here to ensure that they are implemented and configured as smoothly as possible.
            </p>
            <p>
              With every plugin that I configure, I take the time to make sure that they don't disrupt your server's operations. I will make sure each plugin I configure is working and test to check if they are stable, optimised, neat and high quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
