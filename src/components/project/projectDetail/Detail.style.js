import styled from "styled-components";

export const ProjectDetailContainer = styled.div`
  margin-left: 50px;
`;

export const topContainer = styled.div`
  display: flex;
  text-align: left;
`;

export const GithubImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10%;
`;

export const ProjectIntroduce = styled.div`
  flex: 1;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProjectTitle = styled.h2`
  height: 20px;
`;

export const Description = styled.div``;

export const TeamName = styled.h3``;

export const GithubContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const GithubLink = styled.a``;

export const GithubLogo = styled.img`
  width: 23px;
`;

export const StackContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ProjectStack = styled.img`
  width: 30px;
`;

export const TeamMemberContainer = styled.h4`
  display: flex;
  gap: 10px;
`;

export const TeamMember = styled.div``;

export const PresentationTitle = styled.h2`
  margin-top: 50px;
  padding: 10px;
`;

export const PresentationImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 500px;
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
`;
