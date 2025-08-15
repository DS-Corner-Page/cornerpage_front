import React, { useEffect, useMemo } from "react";
import * as D from "./Detail.style";

export default function ProjectDetail({ id, setSelectedDetail, interviewData }) {
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    const handleBackButton = () => setSelectedDetail(null);
    window.addEventListener("popstate", handleBackButton);
    return () => window.removeEventListener("popstate", handleBackButton);
  }, [setSelectedDetail]);

  const flatList = useMemo(() => {
    return Object.entries(interviewData).flatMap(([batch, arr]) =>
      arr.map((item, idx) => ({
        id: `${batch}-${idx + 1}`,
        batch,
        name: item.name,
        content: item.content,
      })),
    );
  }, [interviewData]);

  const target = flatList.find((x) => String(x.id) === String(id));
  if (!target) {
    return <D.ProjectDetailContainer>존재하지 않는 인터뷰입니다.</D.ProjectDetailContainer>;
  }


  const paragraphs = String(target.content).split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <D.ProjectDetailContainer>
      <D.topContainer>
        <div style={{ flex: 1 }}>
          <D.ProjectTitle>{target.name}</D.ProjectTitle>
          <D.Description>
            {paragraphs.map((p, i) => (
              <p key={i} style={{ whiteSpace: "pre-wrap", lineHeight: 1.8 }}>{p}</p>
            ))}
          </D.Description>
        </div>
      </D.topContainer>
    </D.ProjectDetailContainer>
  );
}
