import React, { useState, useEffect } from "react";
import * as T from "./Title.style";
import TreeImg from "../../assets/img/tree.svg";
import CoconutImage from "../../assets/img/coconut.svg";
import GradientBar from "../gradientBar/GradientBar";

export default function Title({ title, subtitle, color }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <T.TitleContainer>
      <T.TopContainer scrollPosition={scrollPosition}>
        <T.Title>{title}</T.Title>
        <GradientBar color={color === "blue" ? "#499FDD" : "#FF8573"} />
      </T.TopContainer>

      <T.BottomContainer scrollPosition={scrollPosition}>
        <GradientBar
          color={color === "blue" ? "#499FDD" : "#FF8573"}
          reverse="true"
        />
        <T.Title>{subtitle}</T.Title>
        <T.ImageContainer
          src={color === "blue" ? TreeImg : CoconutImage}
          alt={color === "red" ? "tree" : "coconut"}
          width="70px"
        />
      </T.BottomContainer>
    </T.TitleContainer>
  );
}
