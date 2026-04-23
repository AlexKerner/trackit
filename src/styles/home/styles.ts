import { StyleSheet } from "react-native";


export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    marginVertical: 40,
    display: "flex",
    alignItems: "flex-start",
  },
  subtitle: {
    color: theme.variant,
    fontSize: 12
  },
  title: {
    fontSize: 36,
    fontFamily: theme.fonts.bold,
    color: theme.font,
    lineHeight: 40
  },
  packages: {
    maxHeight: 450
  },
  packageContent: {
    gap: 16
  }
})