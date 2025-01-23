import * as P from "./ProjectList.style";
import ProjectNumber from "../projectNumber/ProjectNumber";
import ProjectDisplay from "../projectDisplay/ProjectDisplay";

export default function ProjectList({ selectedProject, setSelectedProject }) {
  return (
    <P.ProjectListContainer>
      <ProjectNumber
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <ProjectDisplay />
    </P.ProjectListContainer>
  );
}
