const stats = [
  { value: '50+', label: 'Servers Configured' },
  { value: '100K+', label: 'Players Served' },
  { value: '4+', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
];

const Stats = () => {
  return (
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card-gradient border-2 border-border opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-pixel text-xl md:text-2xl text-gradient-grass mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
