import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign, Ionicons } from "react-native-vector-icons";
import { useSelector } from "react-redux";
import ThemedTouchableOpacity from "./themed/TouchableOpacity"

export default function IconButton({ name, top, ...props }) {
  const theme = useSelector(s=> s.theme)
  return (
    <ThemedTouchableOpacity {...props} style={{ ...styles.iconButton, top: 80 + top }}>
      <Ionicons name={name} size={18} color={theme.light ? 'black' : 'white'} />
    </ThemedTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    position: "absolute",
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
