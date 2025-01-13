import './App.css';
import NavigationaBar from './components/NavigationBar';
import Home from './components/Home';
import AboutSection from './components/AboutSection';
import EducationSection from './components/Education';
import SkillandExperience from './components/SkillandExperience';
import ProjectSection from './components/ProjectSection';
import Certificate from './components/Certificate';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationaBar />
      <Home />
      <AboutSection />
      <EducationSection />
      <SkillandExperience />
      <ProjectSection />
      <Certificate />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
