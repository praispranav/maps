import React, { cloneElement, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "react-native-vector-icons";
import { useSelector } from "react-redux";
import ThemedText from "./themed/Text";
import ThemedTouchableOpacity from "./themed/TouchableOpacity";
import ThemedView from "./themed/View";

const GREY_COLOR = "rgba(180,180,180, 1)";

function SearchItem(props) {
  return (
    <ThemedTouchableOpacity
      activeOpacity={0.9}
      style={styles.searchItem}
      onPress={()=> props.handleItemClick(props)}
    >
      <Image source={props.imageSmall} style={styles.searchItemIcon} />
      <ThemedText>{props.title}</ThemedText>
    </ThemedTouchableOpacity>
  );
}

const Header = (props) => {
  const theme = useSelector((s) => s.theme);
  const inputRef = useRef(null);
  const [searchResult, setSearchResult] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  const onSubmit = () => {
    props.setMarkerLocations(searchResult);
    setIsFocused(false);
  };

  const clearSearchText = () => {
    props.setSearchText("");
    if (inputRef) inputRef.current.blur();
    props.setSelectedLocation(null)
    const result = filterLocations("")
    props.setMarkerLocations(result)
  };

  const filterLocations = (searchText) => {
    const result = props.allMarkerLocations.filter((location) =>
      location.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchResult(result);
    return result;
  };

  const handleItemClick = (location) => {
    props.setSearchText(location.title);
    const result = props.allMarkerLocations.find(
      (i) => location.title.toLowerCase() == i.title.toLowerCase()
    );
    props.setMarkerLocations([result]);
    props.onSelectLocation(location);
    onBlur();
  };

  const onChangeSearchText = (value) =>{
    props.setSearchText(value);
    filterLocations(value);
  }

  useEffect(() => {
    setSearchResult(props.allMarkerLocations.slice(0, 4));
  }, [props.allMarkerLocations]);

  const renderItem = ({ item }) => {
    return (
      <SearchItem
        {...item}
        handleItemClick={handleItemClick}
      />
    );
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
          onChangeText={onChangeSearchText}
          placeholder="Search"
          onFocus={onFocus}
          placeholderTextColor={GREY_COLOR}
          keyboardType="web-search"
          ref={inputRef}
          blurOnSubmit={true}
          onSubmitEditing={onSubmit}
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
          style={[styles.searchResult]}
          data={searchResult}
          renderItem={renderItem}
        />
      ) : undefined}
    </View>
  );
};

const CONTAINER_WIDTH = Dimensions.get("screen").width - 40;

const styles = StyleSheet.create({
  mainContainer: {
    width: CONTAINER_WIDTH,
    elevation: 10,
    borderRadius: 10,
    // backgroundColor: 'green'
  },
  searchContainer: {
    // elevation: 10,
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
    maxHeight:200,
    // backgroundColor: "red"
  },
  searchItem: {
    paddingHorizontal: 15,
    paddingVertical: 9,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  searchItemIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
});

export default Header;
