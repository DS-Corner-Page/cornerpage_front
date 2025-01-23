import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  margin: 50px 40px;
  overflow: hidden;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  transform: ${({ scrollPosition }) =>
    scrollPosition > 0
      ? `translateX(${scrollPosition * 1}px)`
      : "translateX(0)"};
  transition: transform 0.3s ease;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  transform: ${({ scrollPosition }) =>
    scrollPosition > 0
      ? `translateX(-${scrollPosition * 1}px)`
      : "translateX(0)"};
  transition: transform 0.3s ease;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  width: 400px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Bar = styled.img`
  width: 200px;
  align-self: center; /* 세로 가운데 정렬 */
`;

export const ImageContainer = styled.img`
  width: ${({ width }) =>
    width || "50px"}; /* props로 width 설정, 기본값 50px */
`;
