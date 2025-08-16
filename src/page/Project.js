import React, { useState } from "react";
import Title from "../components/title/title/Title";
import ProjectList from "../components/project/projectList/ProjectList";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState("4기"); // 초기값 "4기"
  const [selectedDetail, setSelectedDetail] = useState(null);

  return (
    <div>
      <Title
        title="코너 프로젝트"
        subtitle={`${selectedProject} 프로젝트`}
        color="#9c84ccff"
      />
      <ProjectList
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        selectedDetail={selectedDetail}
        setSelectedDetail={setSelectedDetail}
      />
    </div>
  );
}
