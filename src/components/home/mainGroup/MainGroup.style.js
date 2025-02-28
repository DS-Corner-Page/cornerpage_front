import styled from "styled-components";

export const MainGroupContainer = styled.div`
  width: 99vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ backgroundImg }) =>
    backgroundImg
      ? `background-image: url(${backgroundImg});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;`
      : `background-color: #FFFFFF;`}

  @media (max-width: 1024px) {
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const ContentArea = styled.div`
  width: 80%;
  height: 80%;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 1s ease;

  @media (max-width: 1024px) {
    width: 90%;
    height: 70%;
  }

  @media (max-width: 480px) {
    padding: 15px;
    width: 85%;
  }
`;

export const LayoutContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  transform: ${({ isActive, direction }) =>
    isActive
      ? "translateX(0)"
      : direction === "right"
      ? "translateX(50px)"
      : "translateX(-50px)"};
  transition: transform 1s ease;

  @media (max-width: 768px) {

  }

  @media (max-width: 480px) {
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: ${({ direction }) => (direction === "right" ? "left" : "right")};

  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transform: ${({ isActive, direction }) =>
    isActive
      ? "translateX(0)"
      : direction === "right"
      ? "translateX(50px)"
      : "translateX(-50px)"};
  transition: opacity 1s ease, transform 1s ease;

  @media (max-width: 1024px) {
    gap: 0;
  }
`;

export const ActivityTitle = styled.div`
  font-size: 45px;
  font-weight: bold;
  align-self: ${({ direction }) =>
    direction === "right" ? "flex-start" : "flex-end"};

  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transform: ${({ isActive, direction }) =>
    isActive
      ? "translateX(0)"
      : direction === "right"
      ? "translateX(50px)"
      : "translateX(-50px)"};
  transition: opacity 1s ease 0.3s, transform 1s ease 0.3s;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
    transform: translateY(-30px);
  }

  @media (max-width: 480px) {
    font-size: 22px;
    transform: translateY(-25px);
  }

  @media (max-width: 376px) {
    font-size: 15px;
  }
`;

export const ActivityContent = styled.div`
  font-size: 19px;
  width: 550px;
  word-wrap: break-word;
  white-space: normal;
  margin: 0 10px;
  align-self: ${({ direction }) =>
    direction === "right" ? "flex-start" : "flex-end"};

  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transform: ${({ isActive, direction }) =>
    isActive
      ? "translateX(0)"
      : direction === "right"
      ? "translateX(50px)"
      : "translateX(-50px)"};
  transition: opacity 1s ease 0.5s, transform 1s ease 0.5s;

  @media (max-width: 1024px) {
    margin-top: 40px;
    width: 500px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    display: ${({ hasImage }) => (hasImage ? "none" : "flex")};
    width: 430px;
  }

  @media (max-width: 480px) {
    width: 240px;
    font-size: 12px;
  }

  @media (max-width: 376px) {
    width: 200px;  
    font-size: 10px;
  }
`;
