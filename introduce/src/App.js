import Header from "./header";
import About from "./about";
import Welcome from "./welcome";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import './normalizing.css';
import './body.css';
import Footer from "./footer";

function App() {
  return (
    <>
    <Header/>
    <div>
      <Welcome/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
    <Footer/>

    </>
  );
}

export default App;
