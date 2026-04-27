import { StyleSheet } from "react-native";


export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    maxHeight: "83%",
  },
  title: {
    fontSize: 36,
    color: theme.font,
    fontFamily: theme.fonts.bold,
    marginTop: 30,
    lineHeight: 45
  },
  subtitle: {
    color: theme.variant,
    fontSize: 15,
    marginTop: 15,
    lineHeight: 22
  },
  inputContainer: {
    marginVertical: 20,
    backgroundColor: theme.surface,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    padding: 13,
    elevation: .5,
    shadowColor: theme.primary,
    borderBottomWidth: .2,
    borderBottomColor: theme.primary,
    width: "100%"
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "70%",
  },
  input: {
    color: theme.variant,
    fontSize: 20,
    letterSpacing: 2,
    width: "70%",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    zIndex: 99,
    color: "#FFF",
    fontFamily: theme.fonts.semiBold,
    elevation: 5,
    shadowColor: theme.primary,
  },
  card: {
    backgroundColor: theme.variant2,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 20,
    maxHeight: 160,
    marginBottom: 15,
    borderBottomWidth: .2,
  },
  cardTitle: {
    color: theme.variant,
    fontSize: 11,
    fontFamily: theme.fonts.semiBold,
  },
  cardText: {
    color: theme.font,
    fontSize: 16,
    fontFamily: theme.fonts.semiBold,
    marginTop: 10
  },
  cardStateText: {
    color: "#FFF",
    fontSize: 36,
    fontFamily: theme.fonts.bold,
  },
  cardSubText: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: theme.fonts.semiBold,
  },
  copy: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    borderWidth: 1,
    borderColor: theme.primary,
    padding: 10,
    borderRadius: 12,
    backgroundColor: theme.surface,
  },
  copyText: {
    color: theme.font,
    fontSize: 16,
    fontFamily: theme.fonts.semiBold,
  }
})