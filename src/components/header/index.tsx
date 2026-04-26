import { useTheme } from "@/src/theme/themeProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import { AppText } from "../appText";
import { createStyles } from "./styles";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>
        TRACK <AppText style={styles.titleContent}>IT</AppText>
      </AppText>
      <Pressable onPress={() => toggleTheme()}>
        <MaterialCommunityIcons
          name="brightness-4"
          size={24}
          color={theme.font}
        />
      </Pressable>
    </View>
  );
}
