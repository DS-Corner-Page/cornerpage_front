import React from "react";
import * as P from "./ProjectNumber.style";

export default function ProjectNumber({ selectedProject, setSelectedProject }) {
  const scrollPositions = {
    "4기": 190,
    "3기": 190,
    "2기": 190,
    "1기": 190,
  };

  const handleClick = (number) => {
    // 상세 조회에서 목록 조회로 변경
    setSelectedProject(number);
    window.scrollTo({
      top: scrollPositions[number],
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
