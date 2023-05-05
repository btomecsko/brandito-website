import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Nav.css";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  const [scrollColor, setScroll] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={scrollColor ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Brandito</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/brandito-website">Home</Link>
        </li>
        <li>
          <Link to="/brandito-website/projects">Projects</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#BDB5D5" }} />
        ) : (
          <FaBars size={20} style={{ color: "#BDB5D5" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
