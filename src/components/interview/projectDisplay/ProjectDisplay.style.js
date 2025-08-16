import styled from "styled-components";

export const ProjectDisplayContainer = styled.div`
  flex: 1;
  align-self: flex-start;

  padding-left: 24px;
  padding-right: 24px;

  @media (max-width: 768px) {
    padding-left: 24px; 
    padding-right: 1px; 
  }
  @media (max-width: 480px) {
    padding-right: 1px;  
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px 22px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
`;

export const Name = styled.h3`
  margin: 0 0 10px 0;
  font-size: 20px;
  font-weight: 700;
`;

export const Question = styled.p`
  margin: 14px 0 6px;
  font-weight: 700;
  line-height: 1.75;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: clamp(14px, 3.6vw, 18px);
    white-space: normal !important;
    word-break: keep-all;
    line-height: 1.6;

    display: block;
    max-height: calc(1.6em * 2);
    overflow: hidden;
    text-overflow: clip;
  }
`;

export const Answer = styled.p`
  margin: 0 0 8px;
  color: #111827;
  white-space: pre-wrap;
  line-height: 1.8;
`;

export const Empty = styled.div`
  color: #6b7280;
  margin-top: 8px;
`;
