import styled from "styled-components";

export const ProjectGroupContainer = styled.div`
  margin: 0px 0px 20px 50px;

  @media (max-width: 768px) {
    margin: 0px 0px 20px 35px;
  }

  @media (max-width: 480px) {
    margin: 0px 0px 20px 30px;
  }

  @media (max-width: 420px) {
    margin: 0px 0px 20px 20px;
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  weight: bold;

  @media (max-width: 768px) {
    margin-left: 24px;
    font-size: 18px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-left: 4px;
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

export const ProjectListContainer = styled.div`
  height: 70px;
  flex: 1;
  height: 70px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  height: auto;
`;
