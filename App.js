import React from "react";
import MapScreen from "./src/screens";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import { store } from "./src/store/index";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import themeColors from "./src/config/Theme";

const Stack = createNativeStackNavigator();

function Router() {
  const theme = useSelector((s) => s.theme);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <View
        style={[ styles.bottomBar,
          {
            backgroundColor:
              themeColors[theme.light ? "light" : "dark"][
                "bottomNavigationBackground"
              ],
          },
        ]}
      />
    </SafeAreaView>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "SpaceGrotesk-Bold": require("./assets/fonts/SpaceGrotesk-Bold.ttf"),
    "SpaceGrotesk-Medium": require("./assets/fonts/SpaceGrotesk-Medium.ttf"),
    "SpaceGrotesk-Regular": require("./assets/fonts/SpaceGrotesk-Regular.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

const styles = StyleSheet.create({
  bottomBar:{
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    height: 30,
    width: "100%"
  }
})