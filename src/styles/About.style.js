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
//   font-size: 28px;             /* 기존 24px에서 28px로 변경 */
//   font-weight: bold;
//   color: #000000;              /* 제목을 파란색으로 변경 */
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
// `;

// export const BlueBar = styled.span`
//   display: inline-block;
//   width: 5px;
//   height: 28px;               /* 기존 24px에서 28px로 변경 */
//   background-color: #007bff;
//   margin-right: 10px;
// `;

// export const Text = styled.p`
//   font-size: 18px;             /* 기존 16px에서 18px로 변경 */
//   line-height: 1.8;            /* 줄 간격을 더 넓게 */
//   color: #333;
//   margin: 10px 0;
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


// export const List = styled.ul`
//   margin: 0;
//   padding-left: 20px;
//   list-style-type: disc;
//   color: #333;
//   line-height: 1.8;
//   font-size: 16px;
  
//   li {
//     margin-bottom: 10px;
//   }
// `;


import styled from "styled-components";

/* ContentContainer */
export const ContentContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
`;

/* Section 컨테이너 */
export const Section = styled.div`
  margin-bottom: 40px;
`;

/* SectionTitle: 제목 스타일 */
export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => (props.highlight ? "#007bff" : "#000000")};  /* 파란색 or 검정색 */
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

/* 파란색 바 */
export const BlueBar = styled.span`
  display: inline-block;
  width: 5px;
  height: 28px;
  background-color: #007bff;
  margin-right: 10px;
`;

/* 본문 텍스트 */
export const Text = styled.p`
  font-size: 18px;  /* 기존 16px에서 18px로 변경 */
  line-height: 1.8;
  color: #333;
  margin: 10px 0;
`;

/* 리스트 스타일 */
// export const List = styled.ul`
//   margin: 0;
//   padding-left: 20px;
//   list-style-type: disc;
//   color: #333;
//   line-height: 1.8;
//   font-size: 16px;

//   li {
//     margin-bottom: 10px;
//   }
// `;

export const List = styled.ul`
  margin: 0;
  padding-left: 20px;
  list-style-type: disc;
  list-style-position: outside;
  color: #333;
  line-height: 1.8;
  font-size: 16px;

  li {
    margin-bottom: 10px;
  }
`;


/* 이미지 자리 표시 */
export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e0e0e0;
  text-align: center;
  line-height: 200px;
  color: #ff4d4f;
  border: 1px dashed #ff4d4f;
  margin-top: 20px;
  font-size: 14px;
`;

/* 강조 텍스트 */
export const Emphasize = styled.span`
  color: #007bff;
  font-weight: bold;
  font-style: italic;
`;
