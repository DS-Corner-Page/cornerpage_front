import * as S from "./HackathonImg.style";
import hackathonImg from "../../../assets/img/hackathonImg.svg";
import pawCrewImg from "../../../assets/img/paw-crew.svg"
import coconutsImg from "../../../assets/img/coconuts.svg"

export default function HackathonImg(){
    
    return (
        <S.HackathonImgContainer>
            <S.ProjectImg src={pawCrewImg} />
            <S.ProjectImg src={coconutsImg} />
            <S.HackathonImg src={hackathonImg} />
        </S.HackathonImgContainer>
    );
}