import { Link } from "react-router-dom";
import "../styles/Home.css";
import Brandito from "../assets/brandito.png";


const Home = () => {
    return (
        <div className="home">
        <div className="content">
          <img className="about-img" src={Brandito} alt="brandito" />
          <div>
            <Link to="/projects" className="btn">
              Projects
            </Link>
            <a href="https://github.com/btomecsko" target="_blank" rel="noopener noreferrer" className="btn btn-light">GitHub</a>
          </div>
        </div>
        </div>
    )

}



export default Home;