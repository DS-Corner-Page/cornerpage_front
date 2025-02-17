import styled from "styled-components";

export const ProjectImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 140px;
  gap: 40px;
  transform: translate(580px, -150px);

  @media (max-width: 1460px) {
    transform: translate(320px, -120px);
    gap: 70px;
    margin: 60px;
  }

  @media (max-width: 1024px) {
    transform: translate(200px, -40px);
    gap: 70px;
    margin: 40px;
  }

  @media (max-width: 768px) {
    transform: translateX(150px);
    gap: 70px;
    margin: 25px;
  }

  @media (max-width: 480px) {
    transform: translateX(50px);
    gap: 60px;
    margin: 20px;
  }
`;

export const ProjectImg = styled.img`
  max-width: 100%; 
  height: auto;
  width: 230px; 

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 50%;
  }
`;
