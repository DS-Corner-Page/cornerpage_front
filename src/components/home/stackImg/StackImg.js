import * as S from "./StackImg.style";
import reactLogo from "../../../assets/img/reactLogo.svg";
import nodeLogo from "../../../assets/img/nodeLogo.svg";
import springLogo from "../../../assets/img/springLogo.svg";

export default function StackImg(){
    
    return (
        <S.StackImgContainer>
            <S.ReactImg src={reactLogo} />
            <S.NodeImg src={nodeLogo} />
            <S.SpringImg src={springLogo} />
        </S.StackImgContainer>
    );
}