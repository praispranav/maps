import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import themeColors from "../config/Theme";

export default function Map(props) {
  const theme = useSelector((s) => s.theme);
  return (
    <View>
      <MapView
        region={props.mapConfig}
        onRegionChange={props.onRegionChange}
        userInterfaceStyle={theme.light ? "light" : "dark"}
        style={styles.map}
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
          ? props.markerLocations.map((locationDetail) => (
              <Marker
                title={locationDetail.title}
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
                coordinate={{
                  latitude: locationDetail.latitude,
                  longitude: locationDetail.longitude,
                }}
              />
            ))
          : undefined}
        {props.locationPermission
          ? props.markerLocations.map((locationDetail) => (
              <Circle
                center={{
                  latitude: locationDetail.latitude,
                  longitude: locationDetail.longitude,
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

        {/* { props.selectedLocation && props.selectedLocation.showSingle ? (
          <>
            <Marker
              title={props.selectedLocation.title}
              image={props.selectedLocation.imageLarge}
              key={props.selectedLocation.title + "Marker"}
              zIndex={3}
              style={{ height: 10, width: 10 }}
              onSelect={() => props.onSelectLocation(props.selectedLocation)}
              coordinate={{
                latitude: props.selectedLocation.latitude,
                longitude: props.selectedLocation.longitude,
              }}
            />
            <Circle
              center={{
                latitude: props.selectedLocation.latitude,
                longitude: props.selectedLocation.longitude,
              }}
              radius={60}
              fillColor={
                themeColors[theme.light ? "light" : "dark"]["mapMarker"]
              }
              strokeColor={
                themeColors[theme.light ? "light" : "dark"]["mapMarkerBorder"]
              }
              zIndex={2}
              onPress={() => props.onSelectLocation(props.selectedLocation)}
              strokeWidth={0.7}
            />
          </>
        ) : undefined} */}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
