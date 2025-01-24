import React from "react";
import * as P from "./ProjectNumber.style";

export default function ProjectNumber({ selectedProject, setSelectedProject }) {
  const handleClick = (number) => {
    let scrollOffset;

    if (window.innerWidth <= 480) {
      scrollOffset = 125; // 480px 이하
    } else if (window.innerWidth <= 768) {
      scrollOffset = 140; // 768px 이하
    } else {
      scrollOffset = 190;
    }

    setSelectedProject(number);
    window.scrollTo({
      top: scrollOffset,
      behavior: "smooth",
    });
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
