import * as P from "./ProjectGroup.style";
import SingleProject from "../singleProject/SingleProject";

export default function ProjectGroup({
  title,
  setSelectedDetail,
  projects,
  selectedBatch,
}) {
  const filteredProjects = projects.filter(
    (project) => project.batch === selectedBatch
  );

  if (filteredProjects.length === 0) return null;

  return (
    <P.ProjectGroupContainer>
      <P.Title>{title}</P.Title>
      <P.ProjectListContainer>
        {filteredProjects.map((project) => (
          <SingleProject
            key={project.id}
            id={project.id}
            title={project.service_name}
            img={project.logo_image}
            setSelectedDetail={setSelectedDetail}
            techStack={project.tech_stack}
          />
        ))}
      </P.ProjectListContainer>
    </P.ProjectGroupContainer>
  );
}
