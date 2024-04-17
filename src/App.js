
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skill from './components/Skill';
import { ThemeProvider } from './theme_context';
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
    <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/resume"  element={<Resume/>}/>
        <Route path="/skill"  element={<Skill/>}/>
        <Route path="/projects"  element={<Projects/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
    </ThemeProvider>
   
    </BrowserRouter>
  );
}

export default App;
