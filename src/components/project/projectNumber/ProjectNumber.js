import React from "react";
import * as P from "./ProjectNumber.style";

export default function ProjectNumber({ selectedProject, setSelectedProject }) {
  const handleClick = (number) => {
    setSelectedProject(number);
  };

  return (
    <P.ProjectNumberContainer>
      {["4기", "3기", "2기", "1기"].map((item) => (
        <P.ProjectNumberItem
          key={item}
          isSelected={selectedProject === item}
          onClick={() => handleClick(item)}
        >
          {item}
        </P.ProjectNumberItem>
      ))}
    </P.ProjectNumberContainer>
  );
}
