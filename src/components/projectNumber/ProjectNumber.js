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
    setSelectedProject(number); // 선택 상태 변경

    // 특정 위치로 스크롤 이동
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
          isSelected={selectedProject === item} // 선택 여부 확인
          onClick={() => handleClick(item)} // 클릭 핸들러
        >
          {item}
        </P.ProjectNumberItem>
      ))}
    </P.ProjectNumberContainer>
  );
}
