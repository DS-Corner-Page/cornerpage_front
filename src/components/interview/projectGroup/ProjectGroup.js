import * as P from "../../project/projectGroup/ProjectGroup.style";
import SingleProject from "../singleProject/SingleProject";

export default function ProjectGroup({
  title,
  setSelectedDetail,
  projects,
  selectedBatch,
}) {
  const filteredProjects = projects.filter((p) => p.batch === selectedBatch);
  if (filteredProjects.length === 0) return null;

  return (
    <P.ProjectGroupContainer>
      <P.Title>{title}</P.Title>
      <P.ProjectListContainer>
        {filteredProjects.map((person) => (
          <SingleProject
            key={person.id}
            id={person.id}
            title={person.name}               
            img={person.avatar_url}          
            setSelectedDetail={setSelectedDetail}
            techStack={[]}                   
          />
        ))}
      </P.ProjectListContainer>
    </P.ProjectGroupContainer>
  );
}
