import { NavLink } from "react-router-dom";
import "../styles/Project.css";

const ProjectCard = ({ repo }) => {
  const { name, description, html_url, homepage } = repo;

  return (
    <div className="project-card">
      <h2 className="project-title">{name}</h2>
      <div className="pro-details">
        <p>{description}</p>
        <div className="pro-btns">
          <NavLink to={html_url} className="btn">
            GitHub Repo
          </NavLink>
          {homepage && (
            <NavLink to={homepage} className="btn">
              YouTube
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
