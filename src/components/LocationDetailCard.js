import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import ThemedView from "./themed/View";
import ThemedText from "./themed/Text";
import ThemedTouchableOpacity from "./themed/TouchableOpacity";
import { AntDesign } from "react-native-vector-icons"
import { useSelector } from "react-redux";

export default function LocationDetailCard(props) {
  const theme = useSelector(s=> s.theme)
  return (
    <ThemedView style={styles.card}>
      <Image source={{ uri: props.locationImage }} style={styles.image} />
      <View style={styles.textContainer}>
        <ThemedText style={styles.heading} numberOfLines={1}>{props.title}</ThemedText>
        <ThemedText style={styles.description} numberOfLines={2}>{props.description}</ThemedText>
      </View>
      <ThemedTouchableOpacity onPress={props.clearSelectedLocation} style={styles.closeButton}>
        <AntDesign name="close" size={20} color={theme.light ? 'black' : 'white'} />
      </ThemedTouchableOpacity>
    </ThemedView>
  );
}

const CARD_HEIGHT = 100;
const PADDING = 15;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    width: "100%",
    height: CARD_HEIGHT,
    padding: PADDING,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    elevation: 10
  },
  container: {
    width: "100%",
    padding: 20,
  },
  image: {
    width: CARD_HEIGHT - 2 * PADDING,
    height: CARD_HEIGHT - 2 * PADDING,
    resizeMode: "cover",
    borderRadius: 10,
  },
  heading:{
    fontFamily:"SpaceGrotesk-Bold",
    fontSize: 20,
    marginBottom: 5
  },
  description:{
    fontSize: 15,
    fontFamily:"SpaceGrotesk-Regular",
  },
  textContainer:{
    marginLeft: 10,
    width: "78%"
  },
  closeButton:{
    position: 'absolute',
    top: 15,
    right: 15
  }
});
