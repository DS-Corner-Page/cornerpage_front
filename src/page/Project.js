import React, { useState } from "react";
import Title from "../components/title/title/Title";
import ProjectList from "../components/project/projectList/ProjectList";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState("4기"); // 초기값 "4기"

  return (
    <div>
      <Title
        title="코너 프로젝트"
        subtitle={`${selectedProject} 프로젝트`}
        color="blue"
      />
      <ProjectList
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </div>
  );
}
