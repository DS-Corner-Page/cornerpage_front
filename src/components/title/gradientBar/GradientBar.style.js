import styled from "styled-components";

export const GradientBarContainer = styled.div`
  width: 1800px;
  height: 60px;
  background: linear-gradient(
    90deg,
    ${({ color }) => color.start || color} 0%,
    ${({ color }) => color.end || "white"} 100%
  );
  transform: ${({ reverse }) => (reverse ? "scaleX(-1)" : "none")};
  transform-origin: center;

  @media (max-width: 1350px) {
    width: 800px;
  }

  @media (max-width: 1024px) {
    width: 700px;
    height: 50px;
    margin: 5px 0px;
  }

  @media (max-width: 768px) {
    width: 700px;
    height: 40px;
    margin: 0px;
    margin: 8px 0px;
  }

  @media (max-width: 480px) {
    width: 500px;
    height: 30px;
    margin: 0px;
  }
`;
