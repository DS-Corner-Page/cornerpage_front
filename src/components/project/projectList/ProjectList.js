import * as P from "./ProjectList.style";
import ProjectNumber from "../projectNumber/ProjectNumber";
import ProjectDisplay from "../projectDisplay/ProjectDisplay";
import Detail from "../projectDetail/Detail";

export default function ProjectList({
  selectedProject,
  setSelectedProject,
  selectedDetail,
  setSelectedDetail,
}) {
  // 상세 조회에서 목록 조회로 변경
  const handleProjectNumberClick = (project) => {
    setSelectedProject(project);
    setSelectedDetail(null);
  };

  return (
    <P.ProjectListContainer>
      <ProjectNumber
        selectedProject={selectedProject}
        setSelectedProject={handleProjectNumberClick}
      />
      {selectedDetail ? (
        <Detail id={selectedDetail} setSelectedDetail={setSelectedDetail} />
      ) : (
        <ProjectDisplay
          setSelectedDetail={setSelectedDetail}
          selectedBatch={selectedProject}
        />
      )}
    </P.ProjectListContainer>
  );
}
