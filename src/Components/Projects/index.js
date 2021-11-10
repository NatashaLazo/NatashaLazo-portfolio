import "./style.scss";
import projectss from "./../../Data/projects.json";
import Project from "../Project/index";

function Projects() {
  return (
    <div className="projects-container">
      {projectss.map((project, key) => {
        return <Project data={project} key={key} />;
      })}
    </div>
  );
}

export default Projects;
