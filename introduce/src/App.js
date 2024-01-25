import About from "./about";
import Welcome from "./welcome";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import './common/css/normalizing.css';
import './common/css/body.css';
import Header from "./common/header";
import Footer from "./common/footer";

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
