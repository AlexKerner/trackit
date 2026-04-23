import { StyleSheet } from "react-native";


export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 10
  },
  title: {
    fontSize: 22,
    color: theme.font,
    fontFamily: theme.fonts.bold
  },
  titleContent: {
    fontSize: 23,
    color: theme.primary,
    fontFamily: theme.fonts.bold
  }
})