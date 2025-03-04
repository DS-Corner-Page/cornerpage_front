import { useState, useEffect } from "react";
import * as P from "./ProjectDisplay.style";
import ProjectGroup from "../projectGroup/ProjectGroup";

export default function ProjectDisplay({ setSelectedDetail, selectedBatch }) {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/data/project_data.json") // public 폴더에서 JSON 불러오기
      .then((res) => res.json())
      .then((data) => setProjectData(data))
      .catch((err) => console.error("Failed to load project data:", err));
  }, []);

  // 데이터가 로드되지 않았을 경우 대비
  if (projectData.length === 0) {
    return <></>;
  }

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
