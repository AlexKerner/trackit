import { StyleSheet } from "react-native";


export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: theme.bg
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
    paddingTop: 10
  },
  titleHeader: {
    fontSize: 22,
    color: theme.font,
    fontFamily: theme.fonts.bold
  },
  titleHeaderContent: {
    fontSize: 23,
    color: theme.primary,
    fontFamily: theme.fonts.bold
  },
  title: {
    fontSize: 36,
    color: theme.font,
    fontFamily: theme.fonts.semiBold,
    marginTop: 30,
    lineHeight: 45
  },
  titleContent: {
    color: theme.primary,
    fontFamily: theme.fonts.semiBold,
  },
  subtitle: {
    color: theme.variant,
    fontSize: 15,
    marginTop: 15
  },
  form: {
    marginTop: 20,
    backgroundColor: theme.variant2,
    borderRadius: 12,
    paddingHorizontal: 28,
    paddingVertical: 32
  },
  formContent: {
    display: "flex",
    gap: 20
  },
  inputLabel: {
    color: theme.variant,
    fontSize: 11,
    fontFamily: theme.fonts.semiBold,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: theme.disable,
    paddingVertical: 15,
    color: theme.variant,
  },
  button: {
    backgroundColor: theme.primary,
    borderRadius: 50,
    paddingVertical: 20,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: theme.primary,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: theme.fonts.semiBold
  }
})