import * as S from "./Footer.style";
import insta from "../../assets/img/insta.svg";
import tistory from "../../assets/img/tistory.svg";

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.Section>
        <S.H1>Corner</S.H1>
        <S.H5>덕성여자대학교 IT 소모임 코너</S.H5>
        <S.H5>dswucorner@gmail.com</S.H5>
        <br />
        <S.H5>은키 노을 루나 크롱</S.H5>
      </S.Section>
      <S.Section2>
        <S.H3>We'll Be Glad To Help</S.H3>
        <S.H3>CONTACT US</S.H3>
        <S.Links>
          <S.Button>
            <S.Img src={insta} />
            <S.Link to="#" />
          </S.Button>
          <S.Button>
            <S.Img src={tistory} />
            <S.Link to="#" />
          </S.Button>
        </S.Links>
      </S.Section2>
    </S.FooterContainer>
  );
}
