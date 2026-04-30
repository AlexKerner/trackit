import { StyleSheet } from "react-native";


export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    maxHeight: "83%",
  },
  title: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 30,
    color: theme.font,
    fontFamily: theme.fonts.bold
  },
  card: {
    zIndex: 999,
    backgroundColor: theme.primary,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 10,
    shadowColor: theme.primary,
    elevation: 5
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 15
  },
  iconContainer: {
    backgroundColor: theme.bgIcon,
    padding: 10,
    borderRadius: 12
  },
  status: {
    backgroundColor: theme.bgIcon,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 50
  },
  statusText: {
    fontSize: 12,
    lineHeight: 14,
    color: "#FFF",
    fontFamily: theme.fonts.semiBold
  },
  num: {
    fontSize: 36,
    fontFamily: theme.fonts.bold,
    lineHeight: 45,
    color: "#FFF"
  },
  subNum: {
    color: "#FFF",
    fontSize: 12,
  },
  subCards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  subCardsContent: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    width: "49%",
    backgroundColor: theme.variant2,
    borderRadius: 12,
    borderWidth: .1
  },
  subIconContainer: {
    padding: 5,
    borderRadius: 8
  },
  subStatusText: {
    fontSize: 9,
    lineHeight: 14,
    color: theme.font,
    fontFamily: theme.fonts.semiBold
  },
  numSub: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.font
  },
  recentText: {
    fontSize: 18,
    color: theme.font,
    fontFamily: theme.fonts.semiBold,
    marginTop: 20
  },
  emptyText: {
    color: theme.font,
    fontSize: 20,
    lineHeight: 22
  }
})