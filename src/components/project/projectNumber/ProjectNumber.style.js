import styled from "styled-components";

export const ProjectNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-left: 20px;

  padding: 0px 0px 20px 20px;
  align-items: center;

  position: sticky;
  top: 20px;

  @media (max-width: 1024px) {
    padding: 0px 0px 20px 0px;
  }
`;

export const ProjectNumberItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  font-size: 14px;
  font-weight: bold;

  background: ${({ isSelected }) => (isSelected ? "#FDF0C5" : "white")};

  &:hover {
    background: ${({ isSelected }) => (isSelected ? "#FDF0C5" : "#f0f0f0")};
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
  }
`;
