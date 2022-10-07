import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { AntDesign } from "react-native-vector-icons";
import { useSelector } from "react-redux";
import ThemedView from "./themed/View";
import ThemedText from "./themed/Text";
import ThemedTouchableOpacity from "./themed/TouchableOpacity";
import mapLabels from "../data/sampleLocations";
import themeColors from "../config/Theme";

const GREY_COLOR = "rgba(180,180,180, 1)";

function SearchItem(props) {
  return (
    <ThemedTouchableOpacity  style={styles.searchItem}>
      <Image source={props.imageSmall } style={styles.searchItemIcon} />
      <ThemedText>{props.title}</ThemedText>
    </ThemedTouchableOpacity>
  );
}

const Header = React.forwardRef((props, inputRef) => {
  const theme = useSelector((s) => s.theme);
  const [searchResult, setSearchResult] = useState(mapLabels.slice(0, 4));
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  const onSubmit = () => {};

  const clearSearchText = () => props.setSearchText("");

  const renderItem = ({ item }) => {
    return <SearchItem {...item} />;
  };
  return (
    <View style={styles.mainContainer}>
      <ThemedView
        style={{
          ...styles.searchContainer,
          borderBottomStartRadius: isFocused ? 0 : 10,
          borderBottomEndRadius: isFocused ? 0 : 10,
        }}
      >
        <View style={styles.iconContainer}>
          <AntDesign name="search1" color={GREY_COLOR} size={17} />
        </View>
        <TextInput
          style={[
            styles.searchField,
            { color: theme.light ? "black" : "white" },
          ]}
          value={props.searchText}
          onChangeText={props.setSearchText}
          placeholder="Search"
          onFocus={onFocus}
          onBlur={onBlur}
          placeholderTextColor={GREY_COLOR}
          keyboardType="web-search"
          ref={inputRef}
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={clearSearchText}
        >
          <AntDesign name="close" color={GREY_COLOR} size={20} />
        </TouchableOpacity>
      </ThemedView>
      {isFocused ? (
        <FlatList
          style={styles.searchResult}
          data={searchResult}
          renderItem={renderItem}
        />
      ) : undefined}
    </View>
  );
});

const CONTAINER_WIDTH = Dimensions.get("screen").width - 40;

const styles = StyleSheet.create({
  mainContainer: {
    width: CONTAINER_WIDTH,
    // backgroundColor: "red",
    // overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  searchContainer: {
    height: 50,
    width: CONTAINER_WIDTH,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  searchField: {
    flex: 1,
    fontSize: 17,
  },
  iconContainer: {
    marginHorizontal: 10,
  },
  searchResult: {
    width: "100%",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  searchItem:{
    paddingHorizontal: 15,
    paddingVertical: 9,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  searchItemIcon:{
    width: 20,
    height: 20, marginRight: 15
  }
});

export default Header;
