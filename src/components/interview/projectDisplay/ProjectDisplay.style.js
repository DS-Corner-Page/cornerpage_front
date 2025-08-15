import styled from "styled-components";

export const ProjectDisplayContainer = styled.div`
  flex: 1;
  align-self: flex-start;
  padding: 0 24px;

  @media (max-width: 1024px) {
    padding: 0 16px;
  }
  @media (max-width: 768px) {
    padding: 0;                /* 모바일에서 좌우 여백은 부모가 담당 */
    width: 100%;
  }
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px 22px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  word-break: keep-all;          /* 한글 가독성 */
  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    padding: 16px 14px;
    border-radius: 12px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;   /* 텍스트라 1열이 가장 안정적 */
  gap: 16px;

  @media (min-width: 1200px) {
    gap: 20px;
  }
`;

export const Name = styled.h3`
  margin: 0 0 10px 0;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;


export const Question = styled.p`
  margin: 14px 0 6px;
  font-weight: 700;
  line-height: 1.75;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    margin: 12px 0 6px;
    line-height: 1.7;
  }
`;

export const Answer = styled.p`
  margin: 0 0 8px;
  color: #111827;
  line-height: 1.8;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    margin-bottom: 6px;
    line-height: 1.75;
    font-size: 15px;
  }
`;

export const Empty = styled.div`
  color: #6b7280;
  margin-top: 8px;
  font-size: 14px;
`;
