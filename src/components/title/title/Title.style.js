import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  margin: 50px 40px;
  overflow: hidden;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    margin: 0px;
    gap: 10px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-top: 20px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  align-items: center;
  transform: ${({ scrollPosition }) =>
    scrollPosition > 0
      ? `translateX(${scrollPosition * 1}px)`
      : "translateX(0)"};
  transition: transform 0.3s ease;
  height: 100%;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: ${({ scrollPosition }) =>
    scrollPosition > 0
      ? `translateX(-${scrollPosition * 1}px)`
      : "translateX(0)"};
  transition: transform 0.3s ease;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  width: 440px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1024px) {
    font-size: 35px;
  }

  @media (max-width: 768px) {
    font-size: 27px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    height: 100%;
  }

  @media (max-width: 430px) {
    font-size: 23px;
  }
`;

export const Bar = styled.img`
  width: 200px;
  align-self: center;
`;

export const ImageContainer = styled.img`
  width: 65px;

  @media (max-width: 1024px) {
    width: 50px;
  }

  @media (max-width: 768px) {
    width: 35px;
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    width: 30px;
    margin-right: 10px;
  }
`;
