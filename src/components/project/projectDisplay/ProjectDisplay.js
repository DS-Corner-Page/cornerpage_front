import * as P from "./ProjectDisplay.style";
import SingleProject from "../singleProject/SingleProject";
import ProjectGroup from "../projectGroup/ProjectGroup";

export default function ProjectDisplay() {
  return (
    <P.ProjectDisplayContainer>
      <ProjectGroup title="해커톤" />
      <ProjectGroup title="아이디어톤" />
      <ProjectGroup title="정규 프로젝트" />
    </P.ProjectDisplayContainer>
  );
}
