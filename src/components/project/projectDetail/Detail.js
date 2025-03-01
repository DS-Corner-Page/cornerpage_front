import React, { useEffect, useState } from "react";
import * as D from "./Detail.style";
import PresentationImage from "../presentationImage/PresentationImage";
import GithubLogo from "../../../assets/img/github.svg";
import { getIcon } from "../../../utils/iconMapper";

export default function ProjectDetail({ id, setSelectedDetail }) {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    // 프로젝트 데이터 불러오기
    fetch(process.env.PUBLIC_URL + "/data/project_data.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data))
      .catch((err) => console.error("Failed to load project data:", err));
  }, []);

  useEffect(() => {
    window.history.pushState(null, "", window.location.href);

    const handleBackButton = () => {
      setSelectedDetail(null);
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [setSelectedDetail]);

  // 데이터가 로드되지 않은 경우 로딩 메시지 표시
  if (projectData.length === 0) {
    return <></>;
  }

  const projectDetails = Object.values(projectData).find(
    (project) => project.id === id
  );

  if (!projectDetails) {
    return <div>해당 프로젝트 데이터를 찾을 수 없습니다.</div>;
  }

  const {
    title,
    introduction,
    team_member,
    tech_stack,
    images,
    github_url,
    logo_image,
    service_name,
  } = projectDetails;

  return (
    <D.ProjectDetailContainer>
      <D.topContainer>
        <D.GithubImage src={logo_image} alt="Project Logo" />
        <D.ProjectIntroduce>
          <D.ProjectTitle>
            <D.HighLite>{service_name}</D.HighLite>

            <D.StackContainer>
              {tech_stack.map((stack, index) => (
                <D.ProjectStack key={index} src={getIcon(stack)} />
              ))}
            </D.StackContainer>
          </D.ProjectTitle>
          <D.Description>{introduction}</D.Description>
          <D.TeamMemberContainer>
            <D.TeamName>TEAM {title}</D.TeamName>
            <D.TeamMemberSubContainer>
              {team_member.map((member, index) => (
                <D.TeamMember key={index}>{member}</D.TeamMember>
              ))}
            </D.TeamMemberSubContainer>
          </D.TeamMemberContainer>
          {github_url && (
            <D.GithubLink
              href={github_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <D.GithubContainer>
                <D.GithubLogo src={GithubLogo} alt="Github Logo" />
                <div>Github Link</div>
              </D.GithubContainer>
            </D.GithubLink>
          )}
        </D.ProjectIntroduce>
      </D.topContainer>
      <D.PresentationTitle>발표 자료</D.PresentationTitle>
      <D.PresentationImageContainer>
        {images.map((image, index) => (
          <PresentationImage
            key={index}
            src={image}
            alt={`Project image ${index + 1}`}
          />
        ))}
      </D.PresentationImageContainer>
    </D.ProjectDetailContainer>
  );
}
