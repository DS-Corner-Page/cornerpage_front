import React from "react";
import * as I from "./projectNumber.style";

export default function ProjectNumber({ selectedProject, setSelectedProject }) {
  const handleClick = (number) => {
    setSelectedProject(number);
  };

  return (
    <I.ProjectNumberContainer>
      {["4기", "3기", "2기", "1기"].map((item) => (
        <I.ProjectNumberItem
          key={item}
          isSelected={selectedProject === item}
          onClick={() => handleClick(item)}
        >
          {item}
        </I.ProjectNumberItem>
      ))}
    </I.ProjectNumberContainer>
  );
}
