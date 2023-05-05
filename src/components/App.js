import { Routes, Route } from "react-router-dom";
import "../index.css";
import Home from "../pages/Home";
import Project from "../pages/Project";
import Navbar from "./Navbar";
import Footer from "./Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
