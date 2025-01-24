import TypeScriptIcon from "../assets/img/typescript.svg";
import JavaIcon from "../assets/img/spring.svg";
import ReactIcon from "../assets/img/react.svg";
import NodeIcon from "../assets/img/node.svg";
import FlaskIcon from "../assets/img/flask.svg";
import DjangoIcon from "../assets/img/django.svg";
import KotlinIcon from "../assets/img/kotlin.svg";

import DefaultIcon from "../assets/img/default.svg"; // 기본 아이콘

export const getIcon = (stack) => {
  const iconMap = {
    typescript: TypeScriptIcon,
    java: JavaIcon,
    react: ReactIcon,
    node: NodeIcon,
    flask: FlaskIcon,
    django: DjangoIcon,
    kotlin: KotlinIcon,
  };

  // stack에 해당하는 아이콘이 없으면 DefaultIcon 반환
  return iconMap[stack.toLowerCase()] || DefaultIcon;
};
