import { Navbar } from './components/navbar/Navbar';
import { Banner } from './components/banner/Banner';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import { Publications } from './components/publications/Publications';
import { Achievements } from './components/achievements/Achievements';
import { Contact } from './components/contact/Contact';
import { BackToTop, Footer } from './components/footer/Footer';
import { BackgroundFX, CursorGlow, ScrollProgress } from './components/fx/Fx';

const App = () => {
  return (
    <div className="relative">
      <ScrollProgress />
      <CursorGlow />
      <BackgroundFX />
      <Navbar />
      <main>
        <Banner />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
