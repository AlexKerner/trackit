import { StyleSheet } from "react-native";


export const createStyles = (theme: any) => StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    borderRadius: 12,
    width: "80%",
    backgroundColor: theme.bg,
    padding: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  descriptionText: {
    fontSize: 22,
    fontFamily: theme.fonts.bold,
    color: theme.font,
    maxWidth: 220,
  },
  titleText: {
    marginTop: 15,
    fontSize: 18,
    fontFamily: theme.fonts.semiBold,
    color: theme.variant,
  },
  card: {
    marginTop: 10,
    backgroundColor: theme.variant2,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
  },
  cardIcon: {
    backgroundColor: theme.primary,
    borderRadius: 50,
    padding: 6,
    elevation: 5
  },
  cardInfo: {
    marginLeft: 15,
  },
  statusCard: {
    color: theme.font,
    fontSize: 15,
    fontFamily: theme.fonts.semiBold,
  },
  locationText: {
    color: theme.font,
    fontSize: 12,
  },
  dateText: {
    color: theme.variant,
    fontSize: 12,
  },
  codeCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 50,
    gap: 5
  },
  codeCardText: {
    fontSize: 10,
    lineHeight: 12,
    color: theme.variant,
  }
})