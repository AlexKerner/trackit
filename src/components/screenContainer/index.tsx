import { useTheme } from "@/src/theme/themeProvider";
import { View } from "react-native";

export function ScreenContainer({ children }: any) {
  const { theme } = useTheme();
  return <View style={{ flex: 1, backgroundColor: theme.bg }}>{children}</View>;
}
