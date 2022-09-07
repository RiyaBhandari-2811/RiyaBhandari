import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

const App = () => {
  return (
   <div className="overflow-hidden w-full">
    <NavBar/>
    <Home /> 
    <About />
    <Project />
    <Experience />
    <Contact />
   </div> 
  );
};

export default App;
