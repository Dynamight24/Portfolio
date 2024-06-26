import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Skills from "./routes/Skills";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
