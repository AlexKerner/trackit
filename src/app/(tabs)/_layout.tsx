import { AppText } from "@/src/components/appText";
import { ScreenContainer } from "@/src/components/screenContainer";
import { createStyles } from "@/src/styles/tabs/styles";
import { useTheme } from "@/src/theme/themeProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { usePathname } from "expo-router";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";

export default function Layout() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const pathname = usePathname();
  return (
    <Tabs>
      <ScreenContainer>
        <TabSlot />
      </ScreenContainer>

      <TabList style={styles.container}>
        <TabTrigger name="home" href="/home" style={styles.tabItem}>
          <MaterialCommunityIcons
            name="package-variant-closed"
            size={25}
            style={
              pathname === "/home"
                ? { color: theme.primary }
                : { color: theme.variant }
            }
          />
          <AppText
            style={
              pathname === "/home"
                ? { color: theme.primary, fontFamily: theme.fonts.semiBold }
                : { color: theme.variant }
            }
          >
            Pacotes
          </AppText>
        </TabTrigger>
        <TabTrigger name="dashboard" href="/dashboard" style={styles.tabItem}>
          <MaterialCommunityIcons
            name="view-dashboard-outline"
            size={25}
            style={
              pathname === "/dashboard"
                ? { color: theme.primary }
                : { color: theme.variant }
            }
          />
          <AppText
            style={
              pathname === "/dashboard"
                ? { color: theme.primary, fontFamily: theme.fonts.semiBold }
                : { color: theme.variant }
            }
          >
            Dashboard
          </AppText>
        </TabTrigger>
        <TabTrigger name="cep" href="/cep" style={styles.tabItem}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={25}
            style={
              pathname === "/cep"
                ? { color: theme.primary }
                : { color: theme.variant }
            }
          />
          <AppText
            style={
              pathname === "/cep"
                ? { color: theme.primary, fontFamily: theme.fonts.semiBold }
                : { color: theme.variant }
            }
          >
            Cep
          </AppText>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
