import * as P from "./ProjectGroup.style";
import SingleProject from "../singleProject/SingleProject";

export default function ProjectGroup({ title }) {
  return (
    <P.ProjectGroupContainer>
      <P.Title>{title}</P.Title>
      <P.ProjectListContainer>
        <SingleProject
          title="나르샤"
          img="https://avatars.githubusercontent.com/u/128956089?s=200&v=4"
        />
        <SingleProject
          img="https://avatars.githubusercontent.com/u/126172933?s=200&v=4"
          title="401호"
        />
        <SingleProject
          img="https://avatars.githubusercontent.com/u/157902870?s=200&v=4"
          title="BuddyFriends"
        />
        <SingleProject
          img="https://avatars.githubusercontent.com/u/123245339?s=200&v=4"
          title="콩룡투유"
        />
      </P.ProjectListContainer>
    </P.ProjectGroupContainer>
  );
}
