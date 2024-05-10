import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';

function App() {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </main>
    </>
  );
}

export default App;
