import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Navbar } from "./components/navbar/Navbar";
import { Banner } from "./components/banner/Banner";
import { Skills } from "./components/skills/Skills";
import  Experience  from "./components/experience/Experience";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  ); 
};

export default App;
