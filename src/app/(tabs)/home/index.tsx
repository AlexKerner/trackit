import Header from "@/src/components/header";
import { createStyles } from "@/src/styles/home/styles";
import { useTheme } from "@/src/theme/themeProvider";
import { View } from "react-native";

export default function Home() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}
