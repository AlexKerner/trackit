import { useTheme } from "@/src/theme/themeProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, View } from "react-native";
import { createStyles } from "./styles";

export default function FloatButton({ ...rest }: PressableProps) {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Pressable {...rest} style={styles.button}>
        <MaterialCommunityIcons name="plus" size={35} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}
