import { StyleSheet } from "react-native";

export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    backgroundColor: theme.surface,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingTop: 20,
    maxHeight: 160,
    elevation: 3
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10
  },
  icon: {
    padding: 10,
    borderRadius: 12,
    elevation: 1
  },
  status: {
    backgroundColor: theme.variant,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 50
  },
  statusText: {
    fontSize: 10,
    lineHeight: 14,
    color: "#FFF",
    fontFamily: theme.fonts.semiBold
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.semiBold,
    maxWidth: 210
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10
  },
  date: {
    color: "#94A3B8"
  }
})