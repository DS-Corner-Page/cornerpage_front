import * as P from "../../project/projectList/ProjectList.style";
import ProjectNumber from "../../project/projectNumber/ProjectNumber";
import ProjectDisplay from "../projectDisplay/ProjectDisplay";

export default function ProjectList({
  selectedProject,
  setSelectedProject,
  interviewData,
}) {
  const handleProjectNumberClick = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <P.ProjectListContainer>
      <ProjectNumber
        selectedProject={selectedProject}
        setSelectedProject={handleProjectNumberClick}
      />
      {/* 탭 옆에 바로 인터뷰 텍스트 카드들이 보이도록 */}
      <ProjectDisplay
        selectedBatch={selectedProject}
        interviewData={interviewData}
      />
    </P.ProjectListContainer>
  );
}


