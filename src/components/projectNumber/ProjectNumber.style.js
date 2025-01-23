import styled from "styled-components";

export const ProjectNumberContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 0px 20px 60px;
  align-items: center;

  position: sticky;
  top: 20px;
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
`;
