import * as S from "./ProjectImg.style";
import mountainImg from "../../../assets/img/mountainImg.svg";
import kioskImg from "../../../assets/img/kioskImg.svg";

export default function ProjectImg(){
    
    return (
        <S.ProjectImgContainer>
            <S.ProjectImg src={mountainImg} />
            <S.ProjectImg src={kioskImg} />
        </S.ProjectImgContainer>
    );
}