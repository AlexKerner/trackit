import { useTheme } from "@/src/theme/themeProvider";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import { AppText } from "../appText";
import { createStyles } from "./style";

export default function SplashAnimated() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <AppText style={styles.title}>
          TRACK <AppText style={styles.titleContent}>IT</AppText>
        </AppText>
        <LottieView
          source={require("@/assets/icon/truck.json")}
          autoPlay
          loop
          style={{ width: 150, height: 120, marginTop: -13, marginLeft: -45 }}
        />
      </View>
    </View>
  );
}
