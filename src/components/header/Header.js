import { useState } from "react";
import * as S from "./Header.style";
import Logo from "../../assets/img/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import Menu from "../../assets/img/Menu.svg";
import X from "../../assets/img/X.svg";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsSidebarOpen(false); // 페이지 이동 시 사이드바 닫기
  };

  return (
    <>
      <S.HeaderContainer>
        <S.Section>
          <S.Logo src={Logo} onClick={() => navigate("/")} />
        </S.Section>
        <S.Section>
          <S.Section1>
            <S.Link isActive={location.pathname === "/"} onClick={() => handleNavigate("/")}>
              Home
            </S.Link>
            <S.Link isActive={location.pathname === "/about"} onClick={() => handleNavigate("/about")}>
              About us
            </S.Link>
            <S.Link isActive={location.pathname === "/projectList"} onClick={() => handleNavigate("/projectList")}>
              Project
            </S.Link>
            <S.Link isActive={location.pathname === "/interview"} onClick={() => handleNavigate("/interview")}>
              Interview
            </S.Link>
            <S.Link isActive={location.pathname === "/gallery"} onClick={() => handleNavigate("/gallery")}>
              Gallery
            </S.Link>
          </S.Section1>
          {isSidebarOpen ? <></> : <S.Section2 src={Menu} onClick={handleSidebar} />}
        </S.Section>
        {isSidebarOpen && (
          <S.Sidebar>
            <S.SideHead>
              <S.Link2 onClick={() => handleNavigate("/")}>Corner</S.Link2>
              <S.X src={X} onClick={handleSidebar} />
            </S.SideHead>
            <S.Link2 onClick={() => handleNavigate("/")}>Home</S.Link2>
            <S.Link2 onClick={() => handleNavigate("/about")}>About us</S.Link2>
            <S.Link2 onClick={() => handleNavigate("/projectList")}>Project</S.Link2>
            <S.Link2 onClick={() => handleNavigate("/interview")}>Interview</S.Link2>
            <S.Link2 onClick={() => handleNavigate("/gallery")}>Gallery</S.Link2>
          </S.Sidebar>
        )}
      </S.HeaderContainer>
    </>
  );
}
