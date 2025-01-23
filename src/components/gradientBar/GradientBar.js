import * as G from './GradientBar.style';

export default function GradientBar({ color, reverse }) {
  return <G.GradientBarContainer color={color} reverse={reverse} />;
}
