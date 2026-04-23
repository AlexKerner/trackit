import Header from "@/src/components/header";
import { createStyles } from "@/src/styles/dashboard/styles";
import { useTheme } from "@/src/theme/themeProvider";
import { View } from "react-native";

export default function Dashboard() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}
