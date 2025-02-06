import styled from "styled-components";

export const ProjectDetailContainer = styled.div`
  margin-left: 50px;
  margin-right: 50px;

  @media (max-width: 1024px) {
    margin-left: 30px;
  }

  @media (max-width: 480px) {
    margin-left: 20px;
  }

  @media (max-width: 420px) {
    margin-right: 10px;
  }
`;

export const topContainer = styled.div`
  display: flex;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GithubImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10%;

  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }
`;

export const ProjectIntroduce = styled.div`
  flex: 1;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    margin: 0px;
  }
`;

export const ProjectTitle = styled.h2`
  height: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 7px;

  @media (max-width: 1024px) {
    height: 30px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const HighLite = styled.span`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: -8px;
    bottom: 0; /* 텍스트 아래쪽 위치 */
    width: 120%;
    height: 30%; /* 형광펜 높이 */
    background-color: rgb(255, 218, 95); /* 형광펜 색상 */
    z-index: -1;
    border-radius: 5px; /* 형광펜 모서리 둥글게 */
  }
`;

export const Description = styled.div`
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const GithubContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 7px;
  }
`;

export const GithubLink = styled.a`
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const GithubLogo = styled.img`
  width: 23px;

  @media (max-width: 768px) {
    width: 15px;
  }
`;

export const StackContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ProjectStack = styled.img`
  width: 25px;

  @media (max-width: 1024px) {
    width: 20px;
  }
`;

export const TeamMemberContainer = styled.h4`
  display: flex;
  gap: 10px;

  @media (max-width: 1200px) {
    /* Tablet */
    flex-direction: column;
  }

  @media (max-width: 768px) {
    /* Mobile */
  }
`;

export const TeamName = styled.h3`
  display: flex;
  align-items: center;
  text-align: center;
  height: 21px;

  @media (max-width: 1200px) {
    /* Tablet */
    justify-content: left;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

export const TeamMemberSubContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: 6px;
  }
`;

export const TeamMember = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 21px;
  font-weight: 300;
  border: 1px solid #499fdd;
  font-size: 12px;
  color: #499fdd;
  border-radius: 20px;
  padding: 0px 7px;
`;

export const PresentationTitle = styled.h2`
  margin-top: 50px;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 5px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
  }
`;

export const PresentationImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 800px;
  gap: 10px;
  padding: 10px;
  scrollbar-width: thin;
  scrollbar-color: darkgray transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: darkgray;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: 1600px) {
    /* Tablet */
    height: 520px;
  }

  @media (max-width: 1200px) {
    /* Tablet */
    height: 350px;
  }

  @media (max-width: 768px) {
    padding: 5px;
    height: 300px;
  }

  @media (max-width: 600px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 170px;
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;
