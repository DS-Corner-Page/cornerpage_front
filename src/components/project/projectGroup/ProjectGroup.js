import * as P from "./ProjectGroup.style";
import SingleProject from "../singleProject/SingleProject";

export default function ProjectGroup({ title, setSelectedDetail }) {
  return (
    <P.ProjectGroupContainer>
      <P.Title>{title}</P.Title>
      <P.ProjectListContainer>
        <SingleProject
          id="1"
          title="나르샤"
          img="https://avatars.githubusercontent.com/u/128956089?s=200&v=4"
          setSelectedDetail={setSelectedDetail}
        />
        <SingleProject
          id="2"
          img="https://avatars.githubusercontent.com/u/126172933?s=200&v=4"
          title="401호"
          setSelectedDetail={setSelectedDetail}
        />
        <SingleProject
          id="3"
          img="https://avatars.githubusercontent.com/u/157902870?s=200&v=4"
          title="BuddyFriends"
          setSelectedDetail={setSelectedDetail}
        />
        <SingleProject
          id="4"
          img="https://avatars.githubusercontent.com/u/123245339?s=200&v=4"
          title="콩룡투유"
          setSelectedDetail={setSelectedDetail}
        />
      </P.ProjectListContainer>
    </P.ProjectGroupContainer>
  );
}
