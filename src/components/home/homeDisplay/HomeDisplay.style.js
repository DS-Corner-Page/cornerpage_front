import styled from "styled-components";

export const HomeDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  overflow-x: hidden;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
  
  @media (max-width: 376px) {
    font-size: 15px;
  }
`;

export const mainArea = styled.div`
  margin: 30px 0;
`;