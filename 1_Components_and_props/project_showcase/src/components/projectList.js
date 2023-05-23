import projects from "../projects";
import ProjectCard from "../projectCard";
function ProjectList() {
  const projectsCards = projects.map((individualProject) => {
    return <ProjectCard key={individualProject.id}></ProjectCard>;
  });
  return <div>{projectsCards}</div>;
}

export default ProjectList;
