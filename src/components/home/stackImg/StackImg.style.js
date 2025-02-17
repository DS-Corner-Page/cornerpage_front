import styled from "styled-components";

export const StackImgContainer = styled.div`
  display: flex;
  height: 100%;
  gap: 100px;
  margin: 90px;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 1440px) {
    gap: 60px;
    margin: 35px;
    transform: translateY(50px); 
  }
  
  @media (max-width: 1220px) {
    gap: 40px;
    margin: 35px 40px 35px 20px;
    transform: translateY(50px); 
  }

  @media (max-width: 1024px) {
    gap: 55px;
    margin: 35px 40px 35px 20px;
    transform: translateY(50px); 
  }

  @media (max-width: 970px) {
    gap: 2px;
    margin: 25px;
    transform: translateY(60px);         
  }

  @media (max-width: 768px) {
    gap: 2px;
    margin: 25px;
    flex-wrap: wrap;
    transform: translateY(5px);         
  }

  @media (max-width: 480px) {
    gap: 1px;
    margin: 20px 25px 20px 5px;
    flex-wrap: wrap;
  }
`;

export const ReactImg = styled.img`
  width: 300px;
  height: 150px;

  @media (max-width: 1220px) {
    width: 270px;
    height: 115px;
  }
    
  @media (max-width: 1050px) {
    width: 250px;
    height: 95px;
  }

  @media (max-width: 970px) {
    width: 230px;
    height: 90px;
  }

  @media (max-width: 768px) {
    width: 190px;
    height: 90px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 70px;
  }

`;

export const NodeImg = styled.img`
  width: 300px;
  height: 150px;

  @media (max-width: 1220px) {
    width: 270px;
    height: 115px;
  }

  @media (max-width: 1050px) {
    width: 250px;
    height: 95px;
  }
    
  @media (max-width: 970px) {
    width: 230px;
    height: 90px;
  }

  @media (max-width: 768px) {
    width: 190px;
    height: 90px;
    transform: translateX(230px); 
  }

  @media (max-width: 480px) {
    width: 110px;
    height: 70px;
    transform: translateX(130px); 
  }
`;

export const SpringImg = styled.img`
  width: 300px;
  height: 150px;

  @media (max-width: 1220px) {
    width: 270px;
    height: 115px;
  }

  @media (max-width: 1050px) {
    width: 250px;
    height: 95px;
  }
    
  @media (max-width: 970px) {
    width: 230px;
    height: 90px;
  }

  @media (max-width: 768px) {
    width: 190px;
    height: 90px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 70px;
  }

`;
