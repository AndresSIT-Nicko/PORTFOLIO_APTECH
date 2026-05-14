import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Activities from "./components/Activities";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="activities">
        <Activities />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;