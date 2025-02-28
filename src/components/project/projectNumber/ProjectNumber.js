import React from "react";
import * as P from "./ProjectNumber.style";
import * as A from "../../../styles/GalleryStyle";

export default function ProjectNumber({ selectedProject, setSelectedProject }) {
  const handleClick = (number) => {
    setSelectedProject(number);
  };

  return (
    <A.SideBar>
      {["4기", "3기", "2기", "1기"].map((item) => (
        <A.Now key={item} isSelected={selectedProject === item} onClick={() => handleClick(item)}>
          <A.Num>{item}</A.Num>
        </A.Now>
      ))}
    </A.SideBar>
  );
}

{
  /* <A.SideBar>
  {["4기", "3기", "2기", "1기"].map((item) => (
    <A.Now key={item} onClick={() => handleNum(item)} isactive={selectedNumber === item} as="div">
      <A.Num>{item}</A.Num>
    </A.Now>
  ))}
</A.SideBar>; */
}
