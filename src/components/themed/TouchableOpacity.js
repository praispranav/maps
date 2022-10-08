import { TouchableOpacity as ThemedTouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import themeColors from "../../config/Theme";

export default function TouchableOpacity(props) {
  const theme = useSelector((s) => s.theme);
  const properties = { ...props, style: undefined };
  const currentTheme = theme.light ? "light" : "dark";
  const colors = {
    backgroundColor: themeColors[currentTheme].backgroundColor,
    color: themeColors[currentTheme].color,
  };
  return (
    <ThemedTouchableOpacity
      {...properties}
      onPress={props.onPress}
      style={props.style ? { ...props.style, ...colors } : { ...colors }}
    />
  );
}
