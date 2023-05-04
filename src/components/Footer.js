import { Link } from "react-router-dom";
import "../styles/Footer.css";

import {
    FaMailBulk,
    FaLinkedin
  } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#BDB5D5", marginRight: "2rem" }}
              />
              brandontomecsko@gmail.com
            </h4>
          </div>
            </div>
            <div className="right">
            <h4>About this Portfolio</h4>
          <p>
            This portfolio was designed to showcase my coding projects.
          </p>
          <div className="social">
            <Link to={{pathname: "https://www.linkedin.com/in/btomecsko/"}} target="_blank">
            <FaLinkedin
              size={30}
              style={{ color: "#BDB5D5", marginRight: "1rem" }}
              href="https://www.linkedin.com/in/btomecsko/"
              target="_blank"
            />
            </Link>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Footer