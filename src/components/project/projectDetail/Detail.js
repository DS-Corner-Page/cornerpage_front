import React from "react";
import * as D from "./Detail.style";
import projectData from "../../../core/project_data.json";
import PresentationImage from "../presentationImage/PresentationImage";
import GithubLogo from "../../../assets/img/github.svg";
import { getIcon } from "../../../utils/iconMapper";

export default function ProjectDetail({ id, setSelectedDetail }) {
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
        <D.GithubImage src={logo_image} />
        <D.ProjectIntroduce>
          <D.ProjectTitle>{service_name}</D.ProjectTitle>
          <D.Description>{introduction}</D.Description>
          <D.TeamMemberContainer>
            <D.TeamName>TEAM {title}</D.TeamName>
            {team_member.map((member, index) => (
              <D.TeamMember key={index}>{member}</D.TeamMember>
            ))}
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
          <D.StackContainer>
            {tech_stack.map((stack, index) => (
              <D.ProjectStack src={getIcon(stack)} />
            ))}
          </D.StackContainer>
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
