import styled from "styled-components";

export const SingleProjectContainer = styled.div`
  margin-left: 25px;
`;

export const GithubImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10%;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    filter 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(2deg); /* 약간 확대와 회전 */
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.25); /* 적당한 그림자 */
    filter: brightness(1.1); /* 약간만 밝아지도록 설정 */
  }

  &:active {
    transform: scale(0.95); /* 클릭 시 살짝 줄어듦 */
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); /* 클릭 시 그림자 감소 */
  }
`;

export const ProjectTitle = styled.div`
  margin-top: 10px;
  text-align: center;
  height: 20px;
`;

export const StackContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const ProjectStack = styled.img`
  width: 20px;
`;
