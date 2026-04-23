import { useTheme } from "@/src/theme/themeProvider";
import { View } from "react-native";
import { AppText } from "../appText";
import { createStyles } from "./styles";

export default function Header() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>
        TRACK <AppText style={styles.titleContent}>IT</AppText>
      </AppText>
    </View>
  );
}
