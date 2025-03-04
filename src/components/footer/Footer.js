import * as S from "./Footer.style";
import insta from "../../assets/img/insta.svg";
import tistory from "../../assets/img/tistory.svg";

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.Section>
        <S.H1>Corner</S.H1>
        <S.H5>덕성여자대학교 IT 소모임 코너</S.H5>
        <br />
        <br />
        <S.H5>김은경 김은서 심수빈 정서영</S.H5>
      </S.Section>
      <S.Section2>
        <S.H3>We'll Be Glad To Help</S.H3>
        <S.H3>CONTACT US</S.H3>
        <S.Links>
          <S.Button as="a" href="https://www.instagram.com/cornerdswu/">
            <S.Img src={insta} />
          </S.Button>
          <S.Button as="a" href="https://corner-ds.tistory.com/">
            <S.Img src={tistory} />
          </S.Button>
        </S.Links>
      </S.Section2>
    </S.FooterContainer>
  );
}
