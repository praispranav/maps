import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import ThemedView from "./themed/View"

const GREY_COLOR = "rgba(180,180,180, 1)";

export default function Header() {
  const [searchText, setSearchText] = useState("");

  return (
    <ThemedView style={styles.searchContainer}>
      <View style={styles.iconContainer}>
        <AntDesign name="search1" color={GREY_COLOR} size={17} />
      </View>
      <TextInput
        style={styles.searchField}
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search"
        keyboardType="web-search"
      />
      <TouchableOpacity style={styles.iconContainer}>
        <AntDesign name="close" color={GREY_COLOR} size={20} />
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    borderRadius: 10,
    height: 50,
    width: "100%",
    // backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  searchField: {
    flex: 1,
    fontSize: 17,
  },
  iconContainer: {
    marginHorizontal: 10,
  },
});
