import styled from "styled-components";

export const ListContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;

  &:hover .list,
  &:hover .clone {
    animation-play-state: paused;
  }

`;

export const SlideTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 14px;
  will-change: transform;

  &.list {
    animation: ${props => props.direction === "left" ? "listLeft" : "listRight"} ${props => props.duration}s linear infinite;
  }

  &.clone {
    animation: ${props => props.direction === "left" ? "cloneLeft" : "cloneRight"} ${props => props.duration}s linear infinite;
  }

  @keyframes listLeft {
    0% { transform: translateX(0); }
    50% { transform: translateX(-100%); } 
    50.01% { transform: translateX(100%); } 
    100% { transform: translateX(0); }
  }

  @keyframes cloneLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-200%); }
  }


  @keyframes listRight {
    0% { transform: translateX(0); }
    50% { transform: translateX(100%); }
    50.01% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
  }

  @keyframes cloneRight {
    0% { transform: translateX(-200%); }
    100% { transform: translateX(0); }
  }
`;

export const ProjectCard = styled.div`
  min-width: 460px;
  height: 260px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 2px 2px 10px rgba(130, 130, 130, 0.1);
  overflow: hidden;
  flex-shrink: 1;

  @media (max-width: 1024px) {
    min-width: 400px;
    height: 230px;
  }

  @media (max-width: 768px) {
    min-width: 340px;
    height: 190px;
  }

  @media (max-width: 480px) {
    min-width: 260px;
    height: 150px;
  }

  @media (max-width: 400px) {
    min-width: 190px;
    height: 110px;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
