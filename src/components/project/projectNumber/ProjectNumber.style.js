import styled from "styled-components";

export const ProjectNumberContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 0px 20px 20px;
  align-items: center;

  position: sticky;
  top: 20px;

  @media (max-width: 1024px) {
    padding: 0px 0px 20px 0px;
    width: 80px;
  }
`;

export const ProjectNumberItem = styled.div`
  padding: 5px 30px;
  width: 35px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  background: ${({ isSelected }) =>
    isSelected ? "linear-gradient(90deg, #FFFFFF, #FDF0C5)" : "white"};

  &:hover {
    background: ${({ isSelected }) =>
      isSelected ? "linear-gradient(90deg, #FFFFFF, #FDF0C5)" : "#f0f0f0"};
  }

  @media (max-width: 768px) {
    width: 30px;
    padding: 5px 20px;
  }

  @media (max-width: 480px) {
    width: 25px;
    padding: 5px 20px;
  }
`;
