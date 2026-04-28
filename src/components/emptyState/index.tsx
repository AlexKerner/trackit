import { useTheme } from "@/src/theme/themeProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { AppText } from "../appText";
import { createStyles } from "./styles";

export default function EmptyState() {
  const { theme, toggleTheme } = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <View style={styles.cardIcon}>
        <MaterialCommunityIcons
          name="package-variant-closed"
          color={theme.primaryContrast}
          size={55}
        />
      </View>
      <AppText style={styles.title}>Nenhuma encomenda cadastrada</AppText>
      <AppText style={styles.subTitle}>
        Sua vitrine de logística está vazia. Comece a rastrear seus pacotes
        agora para ter o controle total na palma da sua mão.
      </AppText>
    </View>
  );
}
