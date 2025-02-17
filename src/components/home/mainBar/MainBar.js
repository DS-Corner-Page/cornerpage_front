import React from "react";
import * as S from "./MainBar.style";

export default function MainBar({ direction, isActive }) {
  return (
    <S.BarContainer>
      <S.VerticalBar direction={direction} isActive={isActive} />
      <S.HorizontalBar direction={direction} isActive={isActive} />
    </S.BarContainer>
  );
}