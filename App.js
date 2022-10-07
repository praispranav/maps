import React from "react";
import MapScreen from "./src/screens";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import {store} from "./src/store/index";
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SpaceGrotesk-Bold': require('./assets/fonts/SpaceGrotesk-Bold.ttf'),
    'SpaceGrotesk-Medium': require('./assets/fonts/SpaceGrotesk-Medium.ttf'),
    'SpaceGrotesk-Regular': require('./assets/fonts/SpaceGrotesk-Regular.ttf'),
  });

  if(!fontsLoaded) return null
  return (
    <SafeAreaView style={styles.screen}>
      <Provider store={store}>
        <MapScreen />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});


// import { useEffect, useCallback } from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';

// export default function App() {
 

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <View style={styles.container} onLayout={onLayoutRootView}>
//       <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>Inter Black</Text>
//       <Text style={{ fontSize: 30 }}>Platform Default</Text>
//     </View>
//   );
// }