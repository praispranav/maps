import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import ThemedView from "./themed/View";
import ThemedText from "../components/themed/Text";

export default function LocationDetailCard(props) {
  return (
    <ThemedView style={styles.card}>
      <Image source={{ uri: props.locationImage }} style={styles.image} />
      <View style={styles.textContainer}>
        <ThemedText style={styles.heading} numberOfLines={1}>{props.title}</ThemedText>
        <ThemedText style={styles.description} numberOfLines={2}>{props.description}</ThemedText>
      </View>
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
    fontSize: 24,
    marginBottom: 5
  },
  description:{
    fontSize: 17,
    fontFamily:"SpaceGrotesk-Regular",
  },
  textContainer:{
    marginLeft: 10,
    width: "78%"
  }
});
