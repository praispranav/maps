import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IconButton from "../components/IconButton";
import LocationDetailCard from "../components/LocationDetailCard";
import Map from "../components/Map";
import ThemedView from "../components/themed/View";
import mapLabels from "../data/sampleLocations";
import { changeTheme } from "../store/themeSlice";

const INITIAL_MAP_CONFIG = {
  latitude: 26.567392240889685,
  longitude: 85.51322898273469,
  latitudeDelta: 0.0202,
  longitudeDelta: 0.0111,
};

const INITIAL_CURRENT_LOCATION = {
  coords: {
    accuracy: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    heading: 0,
    latitude: 0,
    longitude: 0,
    speed: 0,
  },
  timestamp: 0,
};

export default function MapScreen() {
  const [allMarkerLocations, setAllMarkerLocations] = useState([]);
  const [markerLocations, setMarkerLocations] = useState([]);
  const [mapConfig, setMapConfig] = useState(INITIAL_MAP_CONFIG);
  const [isLoading, setIsLoading] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(
    INITIAL_CURRENT_LOCATION
  );
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationPermission, setLocationPermission] = useState(false);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {};

  const navigateToCurrentLocation = () => {
    setMapConfig({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.0202,
      longitudeDelta: 0.0111,
    });
  };

  const onRegionChange = (region) => {
    // setMapConfig(region);
  };

  const onSelectLocation = (locationDetail) => {
    setMapConfig({
      latitude: locationDetail.latitude,
      longitude: locationDetail.longitude,
      latitudeDelta: 0.0202,
      longitudeDelta: 0.0111,
    });
    setSelectedLocation(locationDetail);
  };

  const clearSelectedLocation = () => {
    setSelectedLocation(null);
  };

  const handleChangeTheme = () => {
    dispatch(changeTheme());
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setLocationPermission(false);
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setCurrentLocation(location);
    const labelWithLocation = mapLabels.map((locationDetail, index) => {
      locationDetail.latitude = location.coords.latitude + locationDetail.add;
      locationDetail.longitude = location.coords.longitude + locationDetail.sub;
      return locationDetail;
    });
    setMarkerLocations(labelWithLocation);
    setAllMarkerLocations(labelWithLocation);
    setLocationPermission(true);
    setMapConfig({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0202,
      longitudeDelta: 0.0111,
    });
    setIsLoading(false)
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <View style={styles.wrapper}>
      <Map
        mapConfig={mapConfig}
        onRegionChange={onRegionChange}
        currentLocation={currentLocation}
        locationPermission={locationPermission}
        markerLocations={markerLocations}
        onSelectLocation={onSelectLocation}
        selectedLocation={selectedLocation}
      />
      <View style={styles.header}>
        <Header
          allMarkerLocations={allMarkerLocations}
          searchText={searchText}
          setSearchText={setSearchText}
          onSelectLocation={onSelectLocation}
          setMarkerLocations={setMarkerLocations}
          setSelectedLocation={setSelectedLocation}
        />
      </View>
      <ThemedView
        backgroundType="bottomNavigationBackground"
        style={styles.footer}
      >
        <Footer />
      </ThemedView>

      {selectedLocation ? (
        <View style={styles.locationDetailCard}>
          <LocationDetailCard
            locationImage={selectedLocation.locationImage}
            title={selectedLocation.title}
            description={selectedLocation.description}
            clearSelectedLocation={clearSelectedLocation}
          />
        </View>
      ) : undefined}

      <IconButton onPress={handleChangeTheme} name="swap-horizontal" top={40} />
      {locationPermission ? (
        <IconButton
          onPress={navigateToCurrentLocation}
          name="navigate"
          top={100}
        />
      ) : undefined}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  footer: {
    width: "100%",
    zIndex: 1,
    position: "absolute",
    bottom: -19,
    height: 60,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 10
  },
  header: {
    padding: 20,
    position: "absolute",
    top: 0,
    zIndex: 1,
    width: "100%",
  },
  locationDetailCard: {
    width: "100%",
    padding: 20,
    position: "absolute",
    bottom: 75,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});
