import { StyleSheet } from "react-native";

export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: theme.bgEmpty,
    borderRadius: 12,
    borderWidth: .1
  },
  cardIcon: {
    backgroundColor: theme.surface,
    borderRadius: 12,
    paddingVertical: 25,
    paddingHorizontal: 30,
    elevation: 1
  },
  title: {
    marginTop: 25,
    fontSize: 24,
    fontFamily: theme.fonts.semiBold,
    color: theme.font,
    textAlign: "center"
  },
  subTitle: {
    marginTop: 20,
    textAlign: "center",
    color: theme.variant
  }
})