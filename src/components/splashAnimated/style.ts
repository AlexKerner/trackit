import { StyleSheet } from "react-native";


export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.bg
  },
  title: {
    fontSize: 32,
    color: theme.font,
    fontFamily: theme.fonts.bold
  },
  titleContent: {
    fontSize: 33,
    color: theme.primary,
    fontFamily: theme.fonts.bold
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  }
})