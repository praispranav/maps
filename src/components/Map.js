import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import googleMapsConfig from "../config/googleMapsConfig";
import mapDarkModeStyle from "../config/mapDarkMode";
import themeColors from "../config/Theme";
import CustomCallout from "./Callout";

export default function Map(props) {
  const theme = useSelector((s) => s.theme);
  const markers = useRef(null);

  useEffect(() => {
    if (props.markerLocations.length === 1 && markers) {
      markers[0].showCallout();
    }
  }, [props.markerLocations]);
  return (
    <View>
      <MapView
        region={props.mapConfig}
        onRegionChange={props.onRegionChange}
        userInterfaceStyle={theme.light ? "light" : "dark"}
        style={styles.map}
        customMapStyle={
          theme.light
            ? [...googleMapsConfig]
            : [...mapDarkModeStyle, ...googleMapsConfig]
        }
      >


        {props.locationPermission ? (
          <Circle
            center={{
              latitude: props.currentLocation.coords.latitude,
              longitude: props.currentLocation.coords.longitude,
            }}
            radius={20}
            fillColor="#007bff"
            strokeColor="rgba(255,255,255,0.5)"
            zIndex={2}
            strokeWidth={2}
          />
        ) : undefined}

        {props.locationPermission
          ? props.markerLocations.map((locationDetail, index) => (
              <Marker
                title={locationDetail.title}
                ref={(ref) => (markers[index] = ref)}
                image={
                  props.selectedLocation &&
                  props.selectedLocation.title === locationDetail.title
                    ? locationDetail.imageSmall
                    : locationDetail.imageLarge
                }
                key={locationDetail.title + "Marker"}
                zIndex={3}
                style={{ height: 10, width: 10 }}
                onSelect={() => props.onSelectLocation(locationDetail)}
                onPress={() => props.onSelectLocation(locationDetail)}
                coordinate={{
                  latitude: locationDetail.latitude,
                  longitude: locationDetail.longitude,
                }}
              >
                <MapView.Callout tooltip style={styles.callout}>
                <CustomCallout title={locationDetail.title}
                  />
                              </MapView.Callout>
      
              </Marker>
            ))
          : undefined}
        {props.locationPermission
          ? props.markerLocations.map((locationDetail) => (
              <Circle
                center={{
                  latitude: locationDetail.latitude + 0.00029,
                  longitude: locationDetail.longitude - 0.00001,
                }}
                radius={
                  props.selectedLocation &&
                  props.selectedLocation.title === locationDetail.title
                    ? 60
                    : 50
                }
                fillColor={
                  themeColors[theme.light ? "light" : "dark"]["mapMarker"]
                }
                strokeColor={
                  themeColors[theme.light ? "light" : "dark"]["mapMarkerBorder"]
                }
                zIndex={2}
                onPress={() => props.onSelectLocation(locationDetail)}
                strokeWidth={0.7}
              />
            ))
          : undefined}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  callout:{
    borderRadius: 10,
  },
  bubble: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 100,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    margin: 0,
  },
});
