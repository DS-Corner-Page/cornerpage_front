import MainGroup from "../mainGroup/MainGroup";
import * as S from "./HomeDisplay.style";
import socialImg from "../../../assets/img/socialBg.svg";
import conferenceImg from "../../../assets/img/conferenceBg.svg";
import finalPresentationImg from "../../../assets/img/finalPresentationBg.svg";

const ActivityList =[
  {
    title: "정규 스터디",
    content: "학과 커리큘럼 외의 최신 스택을 함께 공부합니다. 코스별 가이드라인을 따라 매 주차 학습 내용을 팀 블로그에 기록합니다.",
    backgroundImg: null,
    direction: "right",
    type: 1
  },
  {
    title: "친목 활동",
    content: "아이스브레이킹 단계에서 코코넛들이 코너에 녹아들 수 있도록 간단한 레크리에이션을 곁들인 MT  행사를 진행합니다. 선후배 간 교류 촉진을 위해 짝선짝후 시스템을 운영하고 있습니다.",
    backgroundImg: socialImg,
    direction: "left"
  },
  {
    title: "아이디어톤/해커톤",
    content: "SW 개발 프로젝트의 맛보기 과정을 아이디어톤과 해커톤을 개최하여 초단기 팀 프로젝트를 진행합니다.",
    backgroundImg: null,
    direction: "right",
    type: 2
  },
  {
    title: "컴퍼런스",
    content: "코코넛들의 이야기를 다양한 각도에서 비춰보는 자리입니다. 각 세션에서 한 팀이 중심이 되어 강연 형식으로 발표하고, 질의응답과 함께 담소를 나누는 시간을 갖습니다. 유심히 찾아보면 좋은 코딩 개념, 세간의 IT 이슈, 사람 사는 이야기까지 어떤 주제든 조명해 봅시다.",
    backgroundImg: conferenceImg,
    direction: "left"
  },  
  {
    title: "정규 프로젝트",
    content: "정기 스터디에서 학습한 프레임워크 또는 새로운 기술 스택을 직접 적용하여 실력을 다집니다. 기획, 설계, 구현, 배포, 회고까지 일련의 과정을 거치며 SW 개발 프로세스를 몸소 경험하고, 6개월간 중장기 협업 기회를 가집니다.",
    backgroundImg: null,
    direction: "right",
    type: 3
  },  
  {
    title: "최종발표회",
    content: "1년간의 활동을 마무리하며 6개월 간의 정규 프로젝트를 회고하는 워크숍 행사를 진행합니다.",
    backgroundImg: finalPresentationImg,
    direction: "left"
  },
];

export default function HomeDisplay(){

  return (
    <S.HomeDisplayContainer>
      <S.Title>코너 연간 활동</S.Title>
      <S.mainArea>
        {ActivityList.map((list) => (
          <MainGroup key={list.title} title={list.title} content={list.content} backgroundImg={list.backgroundImg} direction={list.direction} type={list.type}/>
          ))}
      </S.mainArea>
    </S.HomeDisplayContainer>
  );
}