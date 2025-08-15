import React from "react";
import * as P from "./PresentationImage.style";

export default function PresentationImage({ src, alt }) {
  return <P.PresentationImageContainer src={src} alt={alt} />;
}
