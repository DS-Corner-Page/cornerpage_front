import Title from "../components/title/title/Title";
import * as S from "../styles/About.style";
import groupImage from "../assets/img/Group 38.png";

export default function About() {
  return (
    <>
      <Title
        title="코딩은 너로부터"
        subtitle={`덕성여자대학교 IT 소모임 <br/> Corner`}
        color="#FF8573"
      />

      <S.ContentContainer>
        {/* 1. 코너는 무슨 동아리인가요? */}
        <S.Section>
          <S.SectionTitle>
            <S.BlueBar />
            <span>
              <S.Highlight>코너</S.Highlight>는 무슨 동아리인가요?
            </span>
          </S.SectionTitle>

          <S.Text>
            코너는 덕성여자대학교 IT 소모임으로, 컴퓨터공학전공, 디지털소프트웨어공학부 코코넛들이
            모여 다양한 교류를 나눌 수 있는 공간입니다.
          </S.Text>
        </S.Section>

        {/* 2. 코너의 시작 */}
        <S.Section>
          <S.SectionTitle>
            <S.BlueBar />
            <span>
              <S.Highlight>코너</S.Highlight>의 시작
            </span>
          </S.SectionTitle>

          <S.Text>
            코너는 미약하지만 무한한 가능성에서 시작된 동아리입니다.
            IT 업계에 도전하는 모든 이에게 도움이 될 만한 정보를 자체 인스타그램과 티스토리에
            기록하고 있습니다.
          </S.Text>
          <S.Text>
            최신 트렌드의 IT 정보를 누구나 쉽게 이해할 수 있도록 하는 IT 카드 뉴스를 정기적으로
            제작합니다. 또한 동아리 내에서 진행하는 스터디, 프로젝트 활동을 누구나 참고할 수 있도록
            대외적으로 기록합니다.
          </S.Text>
          <S.Text>지금 이걸 읽고 있는 그대도 마음속의 꿈을 향해 나아가보세요!</S.Text>
          <S.Text>
            실낱같은 가능성이 인생의 가장 큰 확신이 되어가는 그 과정에 우리가 함께할 수 있다면
            우리는 그걸로 충분합니다.
          </S.Text>

        </S.Section>

        {/* 3. 코딩은 너로부터 */}
        <S.Section>
          <S.SectionTitle>
            <S.BlueBar />
            <span>
              <S.Highlight>코</S.Highlight>딩은 <S.Highlight>너</S.Highlight>로부터
            </span>
          </S.SectionTitle>

          <S.Text>
            <S.Emphasize>‘Corner: 코딩은 너로부터’는 2021년 10월 창설된 동아리로, </S.Emphasize>
            SW 개발 입문자를 대상으로 IT 업계 진출 시 요구되는 협업 능력 증진을 위한 활동을 운영하고 총괄합니다.
          </S.Text>
          <S.Text>
            2021년부터 2024년까지 덕성여자대학교 컴퓨터공학전공 제 1전공생을 모집하여 입문자 대상의
            가이드라인을 제시하고, 교육 환경과 더불어 창업 아이템 개발 기회를 제공하고 있습니다.
          </S.Text>
          <S.Text>4기부터 디지털소프트웨어 공학부까지 모집 단위를 확대하여 규모를 키우고 있습니다.</S.Text>
          <S.Text>
            동아리 내외 활동을 SNS 상에 주기적으로 기록해 SW 개발에 관심 있는 누구든지 열람할 수
            있도록 하며 지식 공유의 창구로서 기능하고, 배움의 경험이 이어지는 선순환을 이루고자 합니다.
          </S.Text>
          <S.Text>
            또한 더욱 쾌적한 교육 환경을 조성하고자 예비 개발자들을 위한 손코딩노트, 전자기기 주변 용품
            등을 제작합니다.
          </S.Text>
        </S.Section>

        {/* 4. 운영 목표 */}
        <S.Section>
          <S.SectionTitle>
            <S.BlueBar />
            운영 목표
          </S.SectionTitle>

          <S.Text>- 동아리 내외의 기초 글또를 운영하여 정보의 재생산에 기여합니다.</S.Text>
          <S.Text>- 동아리 내 사전 조사를 통해 개발 인력의 관심사를 고려하여 팀을 편성합니다.</S.Text>
          <S.Text>- 팀별로 다양한 아이디어를 도출하여 결과물을 만들어내고자 합니다.</S.Text>
          <S.Text>
            이를 동아리 내에서 공유하는 경험으로 한정하지 않고, 외부 공모전 참여를 독려하여 지원사업을
            연결하고 SW 개발과 관련하여 다양한 방법으로 성장할 수 있는 발판을 마련합니다.
          </S.Text>

          {/* ⬇ 모바일에서 작아지던 이미지 개선: 컨테이너 폭을 꽉 채우는 반응형 */}
          <S.GoalImage src={groupImage} alt="운영 목표 이미지" />
        </S.Section>
      </S.ContentContainer>
    </>
  );
}
