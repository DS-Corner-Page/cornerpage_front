import * as P from "./ProjectDisplay.style";
import ProjectGroup from "../projectGroup/ProjectGroup";

export default function ProjectDisplay({ setSelectedDetail }) {
  return (
    <P.ProjectDisplayContainer>
      <ProjectGroup title="해커톤" setSelectedDetail={setSelectedDetail} />
      <ProjectGroup title="아이디어톤" setSelectedDetail={setSelectedDetail} />
      <ProjectGroup
        title="정규 프로젝트"
        setSelectedDetail={setSelectedDetail}
      />
    </P.ProjectDisplayContainer>
  );
}
