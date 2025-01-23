import styled from "styled-components";

export const GradientBarContainer = styled.div`
  width: 970px;
  height: 60px;
  background: linear-gradient(
    90deg,
    ${({ color }) => color.start || "rgba(0, 120, 208, 0.72)"} 0%,
    ${({ color }) => color.end || "white"} 100%
  );
  transform: ${({ reverse }) => (reverse ? "scaleX(-1)" : "none")};
  transform-origin: center;
`;
