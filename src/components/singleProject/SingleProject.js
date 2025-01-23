import * as S from "./SingleProject.style";
import Node from "../../assets/img/node.svg";
import React from "../../assets/img/react.svg";

export default function SingleProject({ title, img, stack }) {
  return (
    <S.SingleProjectContainer>
      <S.GithubImage src={img} />
      <S.ProjectTitle>{title}</S.ProjectTitle>
      <S.StackContainer>
        <S.ProjectStack src={Node} />
        <S.ProjectStack src={React} />
      </S.StackContainer>
    </S.SingleProjectContainer>
  );
}
