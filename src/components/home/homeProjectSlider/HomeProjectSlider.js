import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as S from "./HomeProjectSlider.style";

function getCardWidth() {
  const width = window.innerWidth;
  if (width <= 400) {
    return 180;
  } else if (width <= 480) {
    return 200; 
  } else if (width <= 768) {
    return 250;
  } else if (width <= 1024) {
    return 300;
  } else {
    return 460; 
  }
}

export default function HomeProjectSlider({ projects, direction }) {
  const [cardWidth, setCardWidth] = useState(getCardWidth());

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
    };
  
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  const SLIDE_WIDTH = useMemo(() => cardWidth, [cardWidth]);
  const ORIGINAL_LENGTH = projects.length;
  const ProjectLists = useMemo(() => [...projects, ...projects], [projects]);

  // 이미지 초기 위치 지정`
  const initialX = direction === "left" ? 0 : -ORIGINAL_LENGTH * SLIDE_WIDTH;
  const [currentX, setCurrentX] = useState(initialX);
  const slideRef = useRef(null);
  const speed = useRef(2); 
  const intervalRef = useRef(null);
  
  const stopSlide = useCallback(() => {
    if (intervalRef.current) return;
    let lastTime = performance.now();

    const step = (time) => {
      if (!intervalRef.current) return;

      const deltaTime = time - lastTime;
      lastTime = time;

      setCurrentX((prevX) => {
        let newX;
        if (direction === "left") {
          newX = prevX - speed.current * (deltaTime / 16); 
          if (newX <= -ORIGINAL_LENGTH * SLIDE_WIDTH) return 0;
        } else {
          newX = prevX + speed.current * (deltaTime / 16);
          if (newX >= 0) return -ORIGINAL_LENGTH * SLIDE_WIDTH;
        }
        return newX;
      });

      intervalRef.current = requestAnimationFrame(step);
    };

    intervalRef.current = requestAnimationFrame(step);
  }, [direction, ORIGINAL_LENGTH, SLIDE_WIDTH]);

  const startSlide = useCallback(() => {
    if (intervalRef.current) {
      cancelAnimationFrame(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startSlide();
    return () => stopSlide();
  }, [startSlide, stopSlide]); 

  return (
    <S.ListContainer onMouseEnter={stopSlide} onMouseLeave={startSlide}>
      <S.SlideTrack ref={slideRef} style={{ transform: `translateX(${currentX}px)` }}>
        {ProjectLists.map((project, index) => (
          <S.ProjectCard key={`${project.id}-${index}`}>
            <S.ProjectImg src={project.image} alt={`project-${index}`} />
          </S.ProjectCard>
        ))}
      </S.SlideTrack>
    </S.ListContainer>
  );
}
