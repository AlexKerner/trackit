import { Redirect } from "expo-router";
import { View } from "react-native";
import { useTheme } from "../theme/themeProvider";

export default function Index() {
  const { theme } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.bg,
      }}
    >
      <Redirect href="/home" />
    </View>
  );
}
