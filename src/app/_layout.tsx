import { StatusBar } from "expo-status-bar";
import { ThemeProvider, useTheme } from "../theme/themeProvider";

import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Stack } from "expo-router";
import { View } from "react-native";

function RootLayoutNav() {
  const { theme, mode } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <StatusBar style={mode === "dark" ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_bottom",
          contentStyle: {
            backgroundColor: theme.bg,
          },
        }}
      >
        <Stack.Screen name="/(tabs)" />
        <Stack.Screen name="/addPackage/index" />
      </Stack>
    </View>
  );
}

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <RootLayoutNav />
    </ThemeProvider>
  );
}
