import { useState } from 'react';

// Add your images here - replace these placeholder paths with your actual images
const galleryImages = [
  {
    src: '/islandtop.png',
    alt: 'Project screenshot 1',
    title: 'Island top menu',
  },
  {
    src: '/pvpinfo.png',
    alt: 'Project screenshot 2',
    title: 'PvP Info GUI',
  },
  {
    src: '/levelshop.png',
    alt: 'Project screenshot 3',
    title: 'Level shop for skyblock',
  },
  {
    src: '/rizztab.png',
    alt: 'Project screenshot 4',
    title: 'Rizzbox Tab',
  },
  {
    src: '/januarycrate.png',
    alt: 'Project screenshot 5',
    title: 'January Crate 2026',
  },
  {
    src: '/proxyconfig.png',
    alt: 'Project screenshot 6',
    title: 'Proxy Configuration',
  },
  {
    src: '/tebexholo.png',
    alt: 'Project screenshot 7',
    title: 'Tebex Holo',
  },
  {
    src: '/leaderboardselm.png',
    alt: 'Project screenshot 8',
    title: 'Leaderboards Elm',
  },
  {
    src: '/crateselm.png',
    alt: 'Project screenshot 9',
    title: 'Crates Elm',
  },
  {
    src: '/baltop.png',
    alt: 'Project screenshot 10',
    title: 'baltop menu',
  },
  {
    src: '/helpmenu.png',
    alt: 'Project screenshot 11',
    title: 'Help Menu',
  },
  {
    src: '/features.png',
    alt: 'Project screenshot 12',
    title: 'Features Menu',
  },
  {
    src: '/rulesmenu.png',
    alt: 'Project screenshot 13',
    title: 'Rules Menu',
  },
  {
    src: '/chatcolor.png',
    alt: 'Project screenshot 14',
    title: 'Chat Color',
  },
  {
    src: '/mcmmomenu.png',
    alt: 'Project screenshot 15',
    title: 'MCMMO Menu',
  },
  {
    src: '/gpextensionconfig.png',
    alt: 'Project screenshot 16',
    title: 'Claim Menu',
  },
  {
    src: '/storemenu.png',
    alt: 'Project screenshot 17',
    title: 'Store Menu',
  },
  {
    src: '/ajqueue.png',
    alt: 'Project screenshot 18',
    title: 'AJ Queue network setup',
  },
  {
    src: '/customchat.png',
    alt: 'Project screenshot 19',
    title: 'Custom Chat setup',
  },
  {
    src: '/serverrebrand.png',
    alt: 'Project screenshot 20',
    title: 'Server Re-brand',
  },
  {
    src: '/mythicmobs.png',
    alt: 'Project screenshot 21',
    title: 'MythicMobs custom mobs',
  },
  {
    src: '/panelsetup.png',
    alt: 'Project screenshot 22',
    title: 'Pterodactyl Panel Setup with experienced optimizations',
  },
  {
    src: '/elitepets.png',
    alt: 'Project screenshot 23',
    title: 'ElitePets custom pets configuration',
  },
  {
    src: '/votecrate.png',
    alt: 'Project screenshot 24',
    title: 'Vote Crate configuration',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground text-center mb-3">
          Showcase
        </p>
        <h2 className="font-pixel text-lg md:text-xl text-center text-foreground mb-4">
          My Work
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto text-sm">
          Screenshots and visuals from my server development projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-video bg-card border border-border overflow-hidden cursor-pointer hover:border-grass/30 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-sm text-foreground font-medium">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <p className="text-center mt-4 text-foreground">
                {galleryImages[selectedImage].title}
              </p>
              <button
                className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
