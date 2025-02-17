import { useEffect, useRef, useState } from "react";
import * as S from "./MainGroup.style";
import MainBar from "../mainBar/MainBar";
import StackImg from "../stackImg/StackImg";
import HackathonImg from "../hackathonImg/HackathonImg";
import ProjectImg from "../projectImg/ProjectImg";

export default function MainGroup({ title, content, backgroundImg, direction, type }) {
  const containerRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentRef = containerRef.current; 

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const ImgType = ({ type }) => {
    if (type === 1) return <StackImg />;
    if (type === 2) return <HackathonImg />;
    if (type === 3) return <ProjectImg />;
    return null;
  };

  return (
    <S.MainGroupContainer backgroundImg={backgroundImg} ref={containerRef}>
      <S.ContentArea isActive={active} direction={direction}>
        {direction === "left" ? (
          <S.LayoutContainer isActive={active} direction={direction}>
            <MainBar direction={direction} isActive={active} />
            <S.ContentContainer 
              isActive={active} 
              direction={direction}
            >
              <S.ActivityTitle isActive={active} direction={direction}>
                {title}
              </S.ActivityTitle>
              <S.ActivityContent isActive={active} direction={direction} hasImage={false} >
                {content}
              </S.ActivityContent>
            </S.ContentContainer>
          </S.LayoutContainer>
        ) : (
          <S.LayoutContainer isActive={active} direction={direction}>
            <S.ContentContainer 
              isActive={active} 
              direction={direction}
            >
              <S.ActivityTitle isActive={active} direction={direction}>
                {title}
              </S.ActivityTitle>
              <S.ActivityContent isActive={active} direction={direction} hasImage={true}>
                {content}
              </S.ActivityContent>
              <ImgType type={type} />
            </S.ContentContainer>
            <MainBar direction={direction} isActive={active} />
          </S.LayoutContainer>
        )}
      </S.ContentArea>
    </S.MainGroupContainer>
  );
}
