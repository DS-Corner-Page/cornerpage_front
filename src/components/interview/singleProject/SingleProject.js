import * as S from "./SingleProject.style";
import { getIcon } from "../../../utils/iconMapper";
import defaultImg from "../../../assets/img/default.svg";

export default function SingleProject({
  title,
  img,
  id,
  setSelectedDetail,
  techStack = [],
}) {
  const handleClick = () => {
    setSelectedDetail(id);
    window.scrollTo({ top: 190, behavior: "smooth" });
  };

  const safeImg = img || defaultImg;
  const hasStack = Array.isArray(techStack) && techStack.length > 0;

  return (
    <S.SingleProjectContainer onClick={handleClick}>
      <S.GithubImage src={safeImg} alt={title} />
      <S.ProjectTitle>{title}</S.ProjectTitle>
      {hasStack && (
        <S.StackContainer>
          {techStack.map((stack) => (
            <S.ProjectStack key={stack} src={getIcon(stack)} />
          ))}
        </S.StackContainer>
      )}
    </S.SingleProjectContainer>
  );
}
