import { useState, useEffect } from "react";
import HomeProjectSlider from "../homeProjectSlider/HomeProjectSlider";
import * as S from "./HomeProjectList.style";
import defaultImg from "../../../assets/img/homeprojectdefaultImg.svg";

export default function HomeProjectList() {
  const [projectData, setProjectData] = useState(null);

  // component mount 시 public 폴더의 project_data.json을 fetch 하도록 수정(은서)
  // type별로 보여줄지, 기수별로 보여줄지 고민 중
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/data/project_data.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data))
      .catch((err) => console.error("프로젝트 데이터 로딩 실패:", err));
  }, []);

  // 데이터 로드 전엔 로딩 상태 처리
  if (!projectData) {
    return <p>Loading projects...</p>;
  }

  const filterProjectsByBatch = (batch) => {
    return Object.values(projectData)
      .filter((project) => project.batch === batch)
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
