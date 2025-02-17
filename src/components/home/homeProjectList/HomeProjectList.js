import projectData from "../../../core/project_data.json";
import HomeProjectSlider from "../homeProjectSlider/HomeProjectSlider";
import * as S from "./HomeProjectList.style";
import defaultImg from "../../../assets/img/homeprojectdefaultImg.svg"

export default function HomeProjectList() {
  // type별로 보여줄지, 기수별로 보여줄지 고민 중
  const filterProjectsByBatch = (batch) => {
    return Object.values(projectData)
      .filter(project => project.batch === batch)
      .map(({ id, images }) => ({
        id,
        image: images?.[0] || defaultImg,
      }));
  };

  const hackathonProjects = filterProjectsByBatch("3기");
  const finalProjects = filterProjectsByBatch("2기");

  return (
    <S.HomeProjectListContainer>
      <S.ProjectTypeArea>
        <S.ProjectList>
          <HomeProjectSlider projects={hackathonProjects} direction="left" />
        </S.ProjectList>
      </S.ProjectTypeArea>

      <S.ProjectTypeArea>
        <S.ProjectList>
          <HomeProjectSlider projects={finalProjects} direction="right" />
        </S.ProjectList>
      </S.ProjectTypeArea>
    </S.HomeProjectListContainer>
  );
}