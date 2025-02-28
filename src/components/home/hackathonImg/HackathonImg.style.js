import styled from "styled-components";

export const HackathonImgContainer = styled.div`
  display: flex;
  
  @media (max-width: 480px) {
  }
`;

export const ProjectImg = styled.img`
  width: 350px;
  height: 265px;
  margin: 70px 30px 30px 20px;
  border: 1px solid black;
  object-fit: cover;

  @media (max-width: 1440px) {
    width: 290px;
    height: 220px;
    margin: 70px 30px 30px 0px;
    transform: translate(20px, -40px);
  }

  @media (max-width: 1200px) {
    width: 315px;
    height: 240px;
    margin: 70px 70px 30px 0px;
    transform: translateX(95px); 
  }

  @media (max-width: 1024px) {
    width: 250px;
    height: 190px;
    margin: 100px 50px;
    transform: translateX(50px); 
  }

  @media (max-width: 768px) {
    width: 200px; 
    height: 150px;
    margin: 50px 40px 20px 20px;
    transform: translate(40px, 20px);
  }

  @media (max-width: 610px) {
    width: 190px; 
    height: 150px;
    margin: 50px 40px 20px 20px;
    transform: translateY(20px); 
  }

  @media (max-width: 530px) {
    width: 170px; 
    height: 130px;
    margin: 50px 40px 20px 20px;
    transform: translateY(20px); 
  }

  @media (max-width: 480px) {
    width: 130px; 
    height: 100px;
    margin: 30px 20px 0px 0px;
    transform: translate(10px, 30px);
  }

  @media (max-width: 370px) {
    width: 100px; 
    height: 80px;
    margin: 30px 20px 0px 0px;
    transform: translate(10px, 30px);
  }
`;

export const HackathonImg = styled.img`
  width: 500px;
  height: 450px;
  transform: translateY(-80px); 

  @media (max-width: 1440px) {
    width: 400px;
    height: 350px;
    margin-left: 20px;
    transform: translateY(-75px); 
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
