import { Routes, Route } from "react-router-dom";
import "../index.css";
import Home from "../pages/Home";
import Project from "../pages/Project";
import About from "../pages/About";

//import NavBar from "./NavBar";

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
