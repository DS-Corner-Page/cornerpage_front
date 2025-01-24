import styled from "styled-components";

export const SingleProjectContainer = styled.div`
  margin-left: 25px;

  @media (max-width: 480px) {
    margin-left: 5px;
  }
`;

export const GithubImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10%;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    filter 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(2deg);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.25);
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 480px) {
    width: 140px;
    height: 140px;
  }
`;

export const ProjectTitle = styled.div`
  margin-top: 10px;
  text-align: center;
  height: 20px;
`;

export const StackContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const ProjectStack = styled.img`
  width: 20px;
`;
