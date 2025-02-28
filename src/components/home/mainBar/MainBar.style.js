import styled from "styled-components";

export const BarContainer = styled.div`
  position: relative;
  width: 650px;
  height: 600px;

  @media (max-width: 1024px) {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

export const VerticalBar = styled.div`
  position: absolute;
  background-color: black;
  width: 10px;
  height: 600px;
  top: 0;
  ${({ direction }) => (direction === "left" ? "left: 0;" : "right: 0;")}
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transform: ${({ isActive }) => (isActive ? "scaleX(1)" : "scaleX(0)")};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 350px;
    width: 7px;
  }

  @media (max-width: 480px) {
    height: 250px;
    width: 5px;
  }

  @media (max-width: 376px) {
    height: 250px;
    width: 4px;
  }
`;

export const HorizontalBar = styled.div`
  position: absolute;
  background-color: black;
  width: 80vw;
  max-width: 900px;
  min-width: 250px;
  height: 10px;
  top: 30px;
  ${({ direction }) => `${direction === "left" ? "left: 7px;" : "right: 7px;"}`}
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transform: ${({ isActive }) => (isActive ? "scaleX(1)" : "scaleX(0)")};
  transform-origin: ${({ direction }) => (direction === "left" ? "left center" : "right center")};
  transition: opacity 0.8s ease-in-out 0.1s, transform 0.8s ease-in-out 0.1s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: black;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transition: opacity 0.8s ease-in-out 0.1s;
  }

  /* 왼쪽 동그라미 */
  &::before {
    left: -14px;
  }

  /* 오른쪽 동그라미 */
  &::after {
    right: -14px;
  }


  @media (max-width: 1440px) {
    max-width: 680px;
  }

  @media (max-width: 1200px) {
    max-width: 440px;  
  }

  @media (max-width: 1024px) {
    max-width: 500px;
  }

  @media (max-width: 924px) {
    max-width: 450px;
  }

  @media (max-width: 880px) {
    max-width: 370px;
  }

  @media (max-width: 768px) {
    max-width: 375px;
    height: 7px;
    top: 20px;

    &::before,
    &::after {
      width: 17px;
      height: 17px;
      top: -4px;
      right: -12px;
    }

    &::before {
    left: -12px;
    }    
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 5px;

    &::before,
    &::after {
      width: 13px;
      height: 13px;
      top: -4px;
      right: -11px;
    }

    &::before {
    left: -11px;
    }
  }
    
  @media (max-width: 376px) {
    width: 240px;
    height: 4px;

    &::before,
    &::after {
      width: 11px;
      height: 11px;
      top: -4px;
      right: -10px;
    }

    &::before {
    left: -11px;
    }
  }
`;
