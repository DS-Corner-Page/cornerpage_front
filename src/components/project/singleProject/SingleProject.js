import * as S from "./SingleProject.style";
import { getIcon } from "../../../utils/iconMapper";

export default function SingleProject({
  title,
  img,
  id,
  setSelectedDetail,
  techStack,
}) {
  const handleClick = () => {
    setSelectedDetail(id);
    window.scrollTo({ top: 190, behavior: "smooth" });
  };

  return (
    <S.SingleProjectContainer onClick={handleClick}>
      <S.GithubImage src={img} />
      <S.ProjectTitle>{title}</S.ProjectTitle>
      <S.StackContainer>
        {techStack.map((stack) => (
          <S.ProjectStack key={stack} src={getIcon(stack)} />
        ))}
      </S.StackContainer>
    </S.SingleProjectContainer>
  );
}
