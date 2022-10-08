import { View as NormalView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import themeColors from "../../config/Theme";

export default function ThemedView(props) {
  const theme = useSelector((s) => s.theme);
  const properties = { ...props, style: undefined };
  const currentTheme = theme.light ? "light" : "dark";
  const colors = {
    backgroundColor:
      themeColors[currentTheme][
        props.backgroundType ? props.backgroundType : "backgroundColor"
      ],
    color: themeColors[currentTheme]["color"],
  };
  return (
    <NormalView
      {...properties}
      style={props.style ? { ...props.style, ...colors } : { ...colors }}
    />
  );
}
