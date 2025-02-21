// import React, { useState } from "react";
// import "./GenerationList.css";

// const generations = ["4기", "3기", "2기", "1기"];

// export default function GenerationList() {
//   const [selectedGen, setSelectedGen] = useState("4기");

//   return (
//     <div className="generation-list">
//       {generations.map((gen) => (
//         <div
//           key={gen}
//           className={`generation-item ${selectedGen === gen ? "active" : ""}`}
//           onClick={() => setSelectedGen(gen)}
//         >
//           {selectedGen === gen && <span className="circle"></span>}
//           {gen}
//         </div>
//       ))}
//     </div>
//   );
// }

//제목 글 수정
import React, { useState } from "react";
import "./GenerationList.css";

const generations = ["4기", "3기", "2기", "1기"];

export default function GenerationList({ onGenClick }) {
  const [selectedGen, setSelectedGen] = useState("4기");

  const handleClick = (gen) => {
    setSelectedGen(gen);
    onGenClick(gen);
  };

  return (
    <div className="generation-list">
      {generations.map((gen) => (
        <div
          key={gen}
          className={`generation-item ${selectedGen === gen ? "active" : ""}`}
          onClick={() => handleClick(gen)}
        >
          {selectedGen === gen && <span className="circle"></span>}
          {gen}
        </div>
      ))}
    </div>
  );
}

