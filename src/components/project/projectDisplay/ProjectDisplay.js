import * as P from "./ProjectDisplay.style";
import ProjectGroup from "../projectGroup/ProjectGroup";
import projectData from "../../../core/project_data.json";

export default function ProjectDisplay({ setSelectedDetail, selectedBatch }) {
  const hackathonProjects = Object.values(projectData).filter(
    (project) => project.type === 1
  );
  const regularProjects = Object.values(projectData).filter(
    (project) => project.type === 2
  );
  const ideathonProjects = Object.values(projectData).filter(
    (project) => project.type === 3
  );

  return (
    <P.ProjectDisplayContainer>
      <ProjectGroup
        title="해커톤"
        setSelectedDetail={setSelectedDetail}
        projects={hackathonProjects}
        selectedBatch={selectedBatch}
      />

      <ProjectGroup
        title="정규 프로젝트"
        setSelectedDetail={setSelectedDetail}
        projects={regularProjects}
        selectedBatch={selectedBatch}
      />

      <ProjectGroup
        title="아이디어톤"
        setSelectedDetail={setSelectedDetail}
        projects={ideathonProjects}
        selectedBatch={selectedBatch}
      />
    </P.ProjectDisplayContainer>
  );
}
