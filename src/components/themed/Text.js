import { Text as NormalText } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import themeColors from "../../config/Theme";

export default function ThemedText(props) {
  const theme = useSelector((s) => s.theme);
  const properties = { ...props, style: undefined };
  const currentTheme = theme.light ? "light" : "dark";
  const colors = {
    color: themeColors[currentTheme][props.colorType ? props.colorType : "color"],
  };
  return (
    <NormalText
      {...properties}
      style={props.style ? { ...props.style, ...colors } : { ...colors }}
    />
  );
}
