import { useCallback, useEffect, useMemo, useRef, useState } from "react";
  import * as S from "./HomeProjectSlider.style";
  
  export default function HomeProjectSlider({ projects, direction }) {
    const ProjectLists = useMemo(() => projects, [projects]);
    const slideRef = useRef(null);
    let duration = 40;
  
    return (
      <S.ListContainer>
        <S.SlideTrack ref={slideRef} className="list" direction={direction} duration={duration}>
          {ProjectLists.map((project, index) => (
            <S.ProjectCard key={`list-${project.id}-${index}`}>
              <S.ProjectImg src={project.image} alt={`project-${index}`} />
            </S.ProjectCard>
          ))}
        </S.SlideTrack>
  
        <S.SlideTrack ref={slideRef} className="clone" direction={direction} duration={duration}>
          {ProjectLists.map((project, index) => (
            <S.ProjectCard key={`clone-${project.id}-${index}`}>
              <S.ProjectImg src={project.image} alt={`project-${index}`} />
            </S.ProjectCard>
          ))}
        </S.SlideTrack>
      </S.ListContainer>
    );
  }