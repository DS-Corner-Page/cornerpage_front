import styled from "styled-components";
import { motion } from "framer-motion";

export const Gallery = styled.div`
  padding: 5% 10%;
  display: flex;
  flex-direction: row;

  @media (max-width: 480px) {
    margin-top: 60px;
  }
`;

export const SideBar = styled.div`
  width: 8%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Num = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 20px;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 17px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Now = styled.div`
  width: 31px;
  height: 31px;
  background-color: ${(props) => (props.isactive ? "#FEF4D5" : "white")};

  &:hover {
    background: ${({ isactive }) => (isactive ? "#FDF0C5" : "#f0f0f0")};
  }

  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 2% 0 0 5%;
  }
`;

export const ImgBox = styled(motion.div)`
  width: calc((100% - 100px) / 3);
  height: fit-content;
  aspect-ratio: 1 / 1; /* 정사각형 비율 */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5; /* 배경색 (이미지가 없을 때 보임) */
  border-radius: 10px; /* 모서리 둥글게 */
  box-shadow: 5px 5px 5px #dedede;

  @media (max-width: 1024px) {
    width: calc((100% - 40px) / 3); /* 기본적으로 한 줄에 세 개씩 */
  }
  @media (max-width: 768px) {
    width: calc((100% - 20px) / 2); /* 한 줄에 두 개씩 */
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지가 박스에 맞게 채워짐 */
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* 배경 어둡게 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 가장 위로 */
`;

export const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 80%;
  max-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
`;
