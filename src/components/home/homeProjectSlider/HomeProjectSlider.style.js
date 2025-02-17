import styled from "styled-components";

export const ListContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

export const SlideTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  will-change: transform;
  transition: none;
`;

export const ProjectCard = styled.div`
  min-width: 460px;
  height: 260px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 2px 2px 10px rgba(130, 130, 130, 0.1);
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    min-width: 300px;
    height: 230px;
  }

  @media (max-width: 768px) {
    min-width: 250px;
    height: 180px;
  }

  @media (max-width: 480px) {
    min-width: 200px;
    height: 130px;
  }

  @media (max-width: 375px) {
    min-width: 180px;
    height: 110px;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
