import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
        <Stack.Screen
          name="(nobottombar)/accountinfo"
          options={{
            headerShown: true,
            headerTitle: "Account Info",
            headerBackTitle:"Go Back",
            headerTintColor: "#007AFF", 
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerShadowVisible: false, // Optional: hide bottom border on iOS
          }}
        />

        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff', 
  },
});
