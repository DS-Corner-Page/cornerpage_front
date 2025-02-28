// import Title from "../components/title/title/Title";
// import ProjectList from "../components/project/projectList/ProjectList";

// export default function Interview() {
//   return (
//     <>
//       <Title title="코너 인터뷰" subtitle="IT 소모임 Corner" color="blue" />
//     </>
//   );
// }

//최종 코드
// import React, { useState } from "react";
// import Title from "../components/title/title/Title";
// import ProjectList from "../components/project/projectList/ProjectList";
// import GenerationList from "../components/generationList/GenerationList";

// export default function Interview() {
//   return (
//     <>
//       <Title title="코너 인터뷰" subtitle="IT 소모임 Corner" color="blue" />
//       <GenerationList />
//     </>
//   );
// }

import React, { useState } from "react";
import Title from "../components/title/title/Title";
import GenerationList from "../components/generationList/GenerationList";

export default function Interview() {
  const [selectedGen, setSelectedGen] = useState("4기 인터뷰");

  const handleGenClick = (gen) => {
    setSelectedGen(`${gen} 인터뷰`);
  };

  return (
    <>
      <Title title="코너 인터뷰" subtitle={selectedGen} color="blue" />
      <GenerationList onGenClick={handleGenClick} />
    </>
  );
}







//임시로 짠 코드
// import React, { useState } from "react";
// import Title from "../components/title/title/Title";
// import InterviewList from "../components/interview/interviewList/InterviewList.js";

// export default function Interview() {
//   const [selectedProject, setSelectedProject] = useState("4기"); // 초기값 "4기"
//   const [selectedDetail, setSelectedDetail] = useState(null);

//   return (
//     <div>
//       <Title
//         title="코너 인터뷰"
//         subtitle={`${selectedProject} 인터뷰`}
//         color="blue"
//       />
//       <InterviewList
//         selectedProject={selectedProject}
//         setSelectedProject={setSelectedProject}
//         selectedDetail={selectedDetail}
//         setSelectedDetail={setSelectedDetail}
//       />
//     </div>
//   );
// }