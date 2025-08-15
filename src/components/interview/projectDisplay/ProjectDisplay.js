import * as P from "./ProjectDisplay.style";

export default function ProjectDisplay({ selectedBatch, interviewData }) {
  const list = interviewData?.[selectedBatch] || [];

  return (
    <P.ProjectDisplayContainer>
      {list.length === 0 && <P.Empty>인터뷰가 없습니다.</P.Empty>}

      <P.Grid>
        {list.map((item, idx) => {
          const paragraphs = String(item.content)
            .split(/\n\s*\n/)
            .map((p) => p.trim())
            .filter(Boolean);

          return (
            <P.Card key={`${selectedBatch}-${idx + 1}`}>
              <P.Name>{item.name}</P.Name>
              {paragraphs.map((p, i) =>
                /^Q\d+\./.test(p) ? (
                  // 전체 문장은 title로 툴팁 제공, 모바일은 한 줄 + … 처리
                  <P.Question key={i} title={p}>
                    {p}
                  </P.Question>
                ) : (
                  <P.Answer key={i}>{p}</P.Answer>
                )
              )}
            </P.Card>
          );
        })}
      </P.Grid>
    </P.ProjectDisplayContainer>
  );
}
