import { useEffect, useState } from "react";
import "../styles/Project.css";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  const [repoData, setRepos] = useState([]);

  useEffect(() => {
    const loadRepos = async () => {
      const response = await fetch(
        "https://api.github.com/users/btomecsko/starred"
      );
      let data = await response.json();
      setRepos(data);
    };
    loadRepos();
  }, []);

 return (
    <div className="page-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {repoData.map((repo, idx) => (
                <ProjectCard 
                key={idx}
                repo={repo}
                />
            ))}
        </div>

    </div>
 )
};

export default Project;
