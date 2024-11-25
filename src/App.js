import './App.css';
import NavigationaBar from './components/NavigationBar';
import Home from './components/Home';
import AboutSection from './components/AboutSection';
import EducationSection from './components/Education';
import Skill from './components/Skill';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationaBar />
      <Home />
      <AboutSection />
      <EducationSection />
      <Skill />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
