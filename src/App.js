import "./App.scss";
import AboutMe from "./Components/AboutMe/index";
import Contact from "./Components/Contact/index";
import Header from "./Components/Header/index";
import Projects from "./Components/Projects/index";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
