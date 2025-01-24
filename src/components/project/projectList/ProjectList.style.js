import styled from "styled-components";

export const ProjectListContainer = styled.div`
  display: flex;
  margin: 100px;
  position: sticky;
  top: 0;

  @media (max-width: 1024px) {
    margin: 50px;
  }

  @media (max-width: 768px) {
    margin: 30px;
  }

  @media (max-width: 480px) {
    margin: 60px 15px 30px 0px;
  }
`;
