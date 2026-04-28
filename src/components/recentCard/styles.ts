import { StyleSheet } from "react-native";


export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.surface,
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: .1,
    borderColor: theme.variant,
    elevation: .5
  },
  containerStart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15
  },
  imageWrapper: {
    position: "relative",
  },
  iconBadge: {
    position: "absolute",
    bottom: -2,
    right: -2,
    borderRadius: 50,
    padding: 2,
  },
  title: {
    color: theme.font,
    fontFamily: theme.fonts.semiBold,
  },
  status: {
    color: theme.variant,
  },
  location: {
    color: theme.variant,
    fontSize: 11
  },
  date: {
    color: theme.variant,
    fontFamily: theme.fonts.semiBold,
    fontSize: 12
  }
})