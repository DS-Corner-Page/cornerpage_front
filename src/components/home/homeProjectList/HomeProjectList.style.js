import styled from "styled-components";

export const HomeProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  padding: 50px 0;
`;

export const ProjectTypeArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProjectList = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  width: 100%;
  padding: 10px 0px;

  @media (max-width: 1024px) {
    height: 250px;
  }

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 489px) {
    height: 150px;
  }

  @media (max-width: 400px) {
    height: 110px;
  }
`;