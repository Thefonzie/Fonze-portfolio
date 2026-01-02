import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
