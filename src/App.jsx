import Navbar from './components/Navbar.jsx';
import BackgroundFX from './components/BackgroundFX.jsx';
import { Hero, StatsBand } from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Process from './components/Process.jsx';
import Testimonials from './components/Testimonials.jsx';
import Resume from './components/Resume.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // Switch hero layout to "centered" or project cards to "overlay" if you prefer.
  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero layout="split" />
        <StatsBand />
        <About />
        <Services />
        <Projects cardStyle="classic" />
        <Skills />
        <Process />
        <Testimonials />
        <Resume />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
