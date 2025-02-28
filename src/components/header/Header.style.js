import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Logo = styled.img`
  width: 30px;
  height: 30px;
`;
export const Link = styled.div`
  font-family: "GlacialIndifference";
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  margin-left: 20px;
  color: ${({ isActive }) => (isActive ? "#0078D0" : "#000")};
  cursor: pointer;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Section2 = styled.img`
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

// export const Sidebar = styled.div`
//   width: 70%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
//   gap: 30px;
//   z-index: 3000;
//   background-color: #f4f4f4;
//   padding: 20px;
// `;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100vh;
  background-color: rgba(244, 244, 244, 0.95);
  display: flex;
  flex-direction: column;
  z-index: 3000;
  padding: 10%;
  gap: 50px;
`;

export const SideHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const X = styled.img`
  cursor: pointer;
`;

export const Link2 = styled.div`
  font-size: 20px;
  cursor: pointer;
`;
