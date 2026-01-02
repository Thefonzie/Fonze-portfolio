const stats = [
  { value: '10+', label: 'Servers Worked On' },
  { value: '4+', label: 'Years Experience' },
  { value: '$10K+', label: 'Client Revenue Generated' },
  { value: '100%', label: 'Dedication' },
];

const Stats = () => {
  return (
    <section className="py-20 px-4 border-y border-border/50">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-pixel text-lg md:text-xl text-grass mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">
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
