import * as P from "./Detail.style";
import NodeIcon from "../../../assets/img/node.svg";
import ReactIcon from "../../../assets/img/react.svg";
import GithubLogo from "../../../assets/img/github.svg";
import PresentationImage from "../presentationImage/PresentationImage";

export default function ProjectDetail({ id, setSelectedDetail }) {
  // id 값으로 프로젝트 정보 가져오기

  return (
    <P.ProjectDetailContainer>
      <P.topContainer>
        <P.GithubImage src="https://avatars.githubusercontent.com/u/128956089?s=200&v=4" />
        <P.ProjectIntroduce>
          <P.ProjectTitle>여긴 프로젝트명이 들어가야함</P.ProjectTitle>
          <P.TeamMemberContainer>
            <P.TeamMember>김은서</P.TeamMember>
            <P.TeamMember>김은서</P.TeamMember>
            <P.TeamMember>김은서</P.TeamMember>
            <P.TeamMember>김은서</P.TeamMember>
          </P.TeamMemberContainer>
          <P.GithubContainer>
            <P.GithubLink
              href="https://github.com/7beunseo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <P.GithubLogo src={GithubLogo} alt="Github Logo" />
            </P.GithubLink>
            <div>Github Link</div>
          </P.GithubContainer>
          <P.StackContainer>
            <P.ProjectStack src={NodeIcon} />
            <P.ProjectStack src={ReactIcon} />
          </P.StackContainer>
        </P.ProjectIntroduce>
      </P.topContainer>
      <p>Project ID: {id}</p>
      <P.ProjectTitle>발표 자료</P.ProjectTitle>
      <P.PresentationImageContainer>
        <PresentationImage src="https://github.com/user-attachments/assets/f1f1b3ea-e273-4443-972b-a47b3ba0e7fa" />
        <PresentationImage src="https://github.com/user-attachments/assets/da1cc07a-a5e5-4f81-bffa-fbacadcc7c38" />
        <PresentationImage src="https://github.com/user-attachments/assets/b8761560-b0d0-484f-a252-68a6adee4221" />
      </P.PresentationImageContainer>
    </P.ProjectDetailContainer>
  );
}
