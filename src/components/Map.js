import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";

export default function Map(props) {
  return (
    <View>
      <MapView
        region={props.mapConfig}
        onRegionChange={props.onRegionChange}
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
                onPress={() => props.onSelectLocation(locationDetail)}
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
                fillColor="white"
                strokeColor="rgba(150,150,150,1)"
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
});
