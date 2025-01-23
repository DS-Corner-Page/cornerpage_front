import * as P from "./Detail.style";

export default function ProjectDetail({ id, setSelectedDetail }) {
  const handleBack = () => {
    setSelectedDetail(null);
  };

  return (
    <P.ProjectDetailContainer>
      <h1 onClick={handleBack}>Project Detail</h1>
      <p>Project ID: {id}</p>
    </P.ProjectDetailContainer>
  );
}
