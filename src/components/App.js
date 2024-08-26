import { Routes, Route } from "react-router-dom";
import "../index.css";
import Home from "../pages/Home";
import Project from "../pages/Project";
import Certs from "../pages/Certs";
import Navbar from "./Navbar";
import Footer from "./Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/brandito-website" element={<Home />} />
        <Route path="/brandito-website/projects" element={<Project/>} />
        <Route path="/brandito-website/certs" element={<Certs/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
