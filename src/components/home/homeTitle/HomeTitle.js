import { useEffect, useState } from "react";
import * as S from "./HomeTitle.style";

export default function HomeTitle(){
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  
  return (
    <S.HomeTitleContainer>
      <S.MainTitleArea>
        <S.TitleBar scrollPosition={scrollPosition} direction="left" /> 
        <S.MainTitle title="main">Corner</S.MainTitle>
        <S.MainTitle>코딩은<br />너로부터</S.MainTitle>
        <S.TitleBar scrollPosition={scrollPosition} direction="right" />
      </S.MainTitleArea>
      <S.SecondTitleArea>
      <S.SecondTitle scrollPosition={scrollPosition} direction="right">
        <S.Title title="main">덕성여대 IT전공 소모임</S.Title>
        <S.Title>하고 싶은 개발, 취미, 공부. 모두 당신으로부터 시작되는 코너에 합류하세요!</S.Title>
      </S.SecondTitle>
      <S.ColorBar scrollPosition={scrollPosition} direction="left" />
      </S.SecondTitleArea>
    </S.HomeTitleContainer>
    
  );
}
