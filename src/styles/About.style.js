// // import styled from "styled-components";

// // export const ContentContainer = styled.div`
// //   width: 80%;
// //   margin: 0 auto;
// //   padding: 20px 0;
// // `;

// // export const Section = styled.div`
// //   margin-bottom: 40px;
// // `;

// // export const SectionTitle = styled.h2`
// //   font-size: 28px;             
// //   font-weight: bold;
// //   color: #000000;              
// //   display: flex;
// //   align-items: center;
// //   margin-bottom: 10px;
// // `;

// // export const BlueBar = styled.span`
// //   display: inline-block;
// //   width: 5px;
// //   height: 28px;               
// //   background-color: #007bff;
// //   margin-right: 10px;
// // `;

// // export const Text = styled.p`
// //   font-size: 18px;             
// //   line-height: 1.8;            
// //   color: #333;
// //   margin: 10px 0;
// // `;

// // export const ImagePlaceholder = styled.div`
// //   width: 100%;
// //   height: 200px;
// //   background-color: #e0e0e0;
// //   text-align: center;
// //   line-height: 200px;
// //   color: #ff4d4f;
// //   border: 1px dashed #ff4d4f;
// //   margin-top: 20px;
// //   font-size: 14px;
// // `;


// // export const Emphasize = styled.span`
// //   color: #007bff;
// //   font-weight: bold;
// //   font-style: italic;
// // `;


// // export const List = styled.ul`
// //   margin: 0;
// //   padding-left: 20px;
// //   list-style-type: disc;
// //   color: #333;
// //   line-height: 1.8;
// //   font-size: 16px;
  
// //   li {
// //     margin-bottom: 10px;
// //   }
// // `;


// import styled from "styled-components";


// export const ContentContainer = styled.div`
//   width: 80%;
//   margin: 0 auto;
//   padding: 20px 0;
// `;


// export const Section = styled.div`
//   margin-bottom: 40px;
// `;


// export const SectionTitle = styled.h2`
//   font-size: 28px;
//   font-weight: bold;
//   color: ${(props) => (props.highlight ? "#007bff" : "#000000")};  
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
// `;


// export const BlueBar = styled.span`
//   display: inline-block;
//   width: 5px;
//   height: 28px;
//   background-color: #007bff;
//   margin-right: 10px;
// `;


// export const Text = styled.p`
//   font-size: 18px;  
//   line-height: 1.8;
//   color: #333;
//   margin: 10px 0;
// `;


// // export const List = styled.ul`
// //   margin: 0;
// //   padding-left: 20px;
// //   list-style-type: disc;
// //   color: #333;
// //   line-height: 1.8;
// //   font-size: 16px;

// //   li {
// //     margin-bottom: 10px;
// //   }
// // `;

// export const List = styled.ul`
//   margin: 0;
//   padding-left: 20px;
//   list-style-type: disc;
//   list-style-position: outside;
//   color: #333;
//   line-height: 1.8;
//   font-size: 16px;

//   li {
//     margin-bottom: 10px;
//   }
// `;



// export const ImagePlaceholder = styled.div`
//   width: 100%;
//   height: 200px;
//   background-color: #e0e0e0;
//   text-align: center;
//   line-height: 200px;
//   color: #ff4d4f;
//   border: 1px dashed #ff4d4f;
//   margin-top: 20px;
//   font-size: 14px;
// `;


// export const Emphasize = styled.span`
//   color: #007bff;
//   font-weight: bold;
//   font-style: italic;
// `;



// 수정본 1
import styled from "styled-components";


export const ContentContainer = styled.div`
  width: 86%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 0 72px;

  @media (max-width: 1024px) {
    width: 90%;
    padding: 36px 0 56px;
  }
  @media (max-width: 768px) {
    width: 92%;
    padding: 28px 0 48px;
  }
`;


export const Section = styled.div`
  margin-bottom: 72px;

  @media (max-width: 1024px) {
    margin-bottom: 56px;
  }
  @media (max-width: 768px) {
    margin-bottom: 44px;
  }
`;


export const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 16px;              
  margin: 0 0 16px 0;
  font-weight: 800;
  color: #111;
  letter-spacing: -0.02em;

  font-size: 32px;
  @media (max-width: 1024px) { font-size: 30px; }
  @media (max-width: 768px)  { font-size: 26px; }
`;


export const BlueBar = styled.span`
  display: inline-block;
  width: 6px;
  height: 40px;          
  border-radius: 3px;
  background: #2f6ce5;    
  margin-left: 4px;      
  margin-right: 12px;     

  @media (max-width: 1024px) { height: 34px; }
  @media (max-width: 768px)  { height: 28px; margin-right: 10px; }
`;


export const Text = styled.p`
  margin: 8px 0 0;
  font-size: 16px;
  line-height: 1.9;
  color: #222;
  word-break: keep-all;

  @media (max-width: 1024px) {
    font-size: 15.5px;
    line-height: 1.85;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.8;
  }
`;


export const Highlight = styled.span`
  color: #2f6ce5;
`;


export const PlaceImage = styled.img`
  display: block;
  width: 100%;
  max-width: 960px;
  height: auto;
  margin: 22px auto 0;
  border-radius: 12px;
  object-fit: cover;
`;


export const GoalImage = styled.img`
  display: block;
  width: 100%;           
  max-width: 980px;
  height: auto;
  margin: 28px auto 0;


  @media (max-width: 768px) {
    width: 100%;
    max-width: none;    
    margin-top: 20px;
  }
`;


export const Emphasize = styled.span`
  color: #2f6ce5;
  font-weight: 700;
`;
