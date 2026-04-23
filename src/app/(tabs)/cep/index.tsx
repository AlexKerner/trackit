import Header from "@/src/components/header";
import { createStyles } from "@/src/styles/cep/styles";
import { useTheme } from "@/src/theme/themeProvider";
import { View } from "react-native";

export default function Cep() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}
