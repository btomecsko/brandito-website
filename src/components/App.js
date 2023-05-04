import { Routes, Route } from "react-router-dom";
import "../index.css";
import Home from "../pages/Home";
import Project from "../pages/Project";
import About from "../pages/About";
import Navbar from "./Navbar";
import Footer from "./Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
