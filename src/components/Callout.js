import React, { Component } from "react";
import {
  Image, // Renders images
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View, // Container component
} from "react-native";
import ThemedText from "./themed/Text";
import ThemedView from "./themed/View";

export default function Callout(props) {
  return (
    <View style={styles.container}>
      <ThemedView style={styles.bubble}>
        <View style={styles.center}>
          <ThemedText style={styles.heading}>{props.title}</ThemedText>
        </View>
      </ThemedView>
      <View style={styles.arrowBorder} />
      <View style={styles.arrow} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontFamily: "SpaceGrotesk-Bold",
  },
  container: {
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  bubble: {
    flexDirection: "row",
    alignSelf: "flex-start",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 10,
    textAlign: 'center',
    width: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
});


