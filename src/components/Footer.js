import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "react-native-vector-icons";
import { useSelector } from "react-redux";

const BLACK = "#000000";
const WHITE = "#ffffff";

export default function Footer() {
  const theme = useSelector((s) => s.theme);
  const color = theme.light ? BLACK : WHITE;
  return (
    <View style={styles.flex}>
      <View>
        <Ionicons name="navigate" color={color} size={22} />
      </View>
      <View>
        <FontAwesome name="map" color={color} size={22} />
      </View>

      <View style={{ width: 60 }}>
        <FontAwesome
          name="map"
          color={"white"}
          style={{ opacity: 0 }}
          size={22}
        />
      </View>

      <View style={styles.plusButton}>
        <AntDesign name="plus" color={"#ffffff"} size={28} />
      </View>

      <View>
        <AntDesign name="bells" color={color} size={22} />
      </View>
      <View>
        <AntDesign name="user" color={color} size={22} />
      </View>
    </View>
  );
}

const plusIconWidth = 65;
const styles = StyleSheet.create({
  flex: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
  },
  plusButton: {
    left: Dimensions.get("window").width / 2 - plusIconWidth / 2,
    width: plusIconWidth,
    height: plusIconWidth,
    backgroundColor: "red",
    position: "absolute",
    top: -(plusIconWidth / 2),
    borderRadius: plusIconWidth,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
