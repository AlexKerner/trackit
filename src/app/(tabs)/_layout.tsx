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

  function isActive(route: string) {
    if (pathname === "/") return route === "/home";
    return pathname === route || pathname.startsWith(route + "/");
  }
  console.log(pathname);
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
              isActive("/home")
                ? { color: theme.primary }
                : { color: theme.variant }
            }
          />
          <AppText
            style={
              isActive("/home")
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
              isActive("/dashboard")
                ? { color: theme.primary }
                : { color: theme.variant }
            }
          />
          <AppText
            style={
              isActive("/dashboard")
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
              isActive("/cep")
                ? { color: theme.primary }
                : { color: theme.variant }
            }
          />
          <AppText
            style={
              isActive("/cep")
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
