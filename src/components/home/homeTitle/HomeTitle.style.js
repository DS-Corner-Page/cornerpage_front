import styled from "styled-components";

export const HomeTitleContainer = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: center; 
  align-items: center;    
  margin: 200px 0;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    margin: 180px 0;
  }

  @media (max-width: 768px) {
    margin: 120px 0;
  }

  @media (max-width: 480px) {
    margin: 80px 0;
  }

`;

export const MainTitleArea = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap; 
  margin-left: 10px;
`;

export const MainTitle = styled.div`
  ${({title}) => title === "main" ? 
  ` font-size: 9.5em;`
  : 
  ` font-size: 4.5em;
    line-height: 1.1;
    margin-left: 90px;`
  }
  font-weight: bold;
  white-space: nowrap;

  @media (max-width: 1024px) {
    ${({ title }) => title === "main" ? "font-size: 5em;" : "font-size: 3em;"}
  }

  @media (max-width: 768px) {
    ${({ title }) => title === "main" ? "font-size: 60px;" : "font-size: 40px;  margin-left: 50px;"}
  }

  @media (max-width: 480px) {
    ${({ title }) => title === "main" ? "font-size: 39px;" : "font-size: 23px; margin-left: 30px;"}
  }
`;

export const TitleBar = styled.hr`
  flex: none;
  width: 26em;
  border: none;
  border-top: 10px solid black;
  ${({ direction }) =>
    direction === "left" ? `margin-top: 170px;` : `margin-bottom: 170px;`}

  opacity: ${({ scrollPosition }) => (scrollPosition > 350 ? 0 : 1)};
  transform: ${({ scrollPosition, direction }) =>
    direction === "left"
      ? `translateX(-${Math.min(scrollPosition, 300)}px)`
      : `translateX(${Math.min(scrollPosition, 300)}px)`};

  transition: transform 0.5s ease-out, opacity 0.4s ease-out;
  
  @media (max-width: 1024px) {
    width: 16em;
  }

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 480px) {
    ${({ direction }) =>
    direction === "left" ? `margin-top: 80px;` : `margin-bottom: 80px;`}
    border-top: 6px solid black;
    width: 100px;
  }
`;


export const SecondTitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 220px;
  
  @media (max-width: 1024px) {
    margin-top: 180px;
  }

  @media (max-width: 768px) {
    margin-top: 140px;
  }

  @media (max-width: 480px) {
    margin-top: 80px;
  }

`;

export const SecondTitle = styled.div`
  transition: transform 0.5s ease-out, opacity 0.4s ease-out;
  opacity: ${({ scrollPosition }) => (scrollPosition > 400 ? 0 : 1)};
  transform: ${({ scrollPosition }) => `translateX(-${Math.min(scrollPosition, 400)}px)`};

  @media (max-width: 1024px) {
    margin: 30px 20px;
  }

  @media (max-width: 480px) {
    margin: 30px 10px;
  }

  @media (max-width: 376px) {
    margin: 30px 8px;
  }

`;

export const Title = styled.div`
  ${({ title }) => title === "main" ? 
  ` font-size: 2.5em;
    font-weight: bold;`
  : 
  ` font-size: 1.2em;
    margin-top: 20px;`
  }

  @media (max-width: 1024px) {
    ${({ title }) => title === "main" ? "font-size: 2em;" : "font-size: 1.1em;"}
  }

  @media (max-width: 768px) {
    ${({ title }) => title === "main" ? "font-size: 1.7em;" : "font-size: 15px;"}
  }

  @media (max-width: 480px) {
    ${({ title }) => title === "main" ? "font-size: 18px;" : "font-size: 11px; margin-top: 7px;"}
  }
  
  @media (max-width: 376px) {
    ${({ title }) => title === "main" ? "font-size: 15px;" : "font-size: 10px; margin-top: 7px;"}
  }
  

`;

export const ColorBar = styled.div`
  width: 600px;
  height: 100px;
  margin-left: 50px;
  background: linear-gradient(to right, #FFCF77, #FFFFFF);

  transition: transform 0.5s ease-out, opacity 0.4s ease-out;
  opacity: ${({ scrollPosition }) => (scrollPosition > 400 ? 0 : 1)};
  transform: ${({ scrollPosition }) => `translateX(${Math.min(scrollPosition, 400)}px)`};

  @media (max-width: 768px) {
    width: 380px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 60px;
  }

  @media (max-width: 376px) {
    width: 250px;
    height: 50px;
    margin-left: 30px;
  }
`;
