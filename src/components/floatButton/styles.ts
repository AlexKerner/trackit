import { StyleSheet } from "react-native";


export const createStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 999,
    elevation: 5,
    position: "absolute",
    bottom: 130,
    right: 20
  },
  button: {
    backgroundColor: theme.primary,
    padding: 15,
    borderRadius: 50,
    shadowColor: theme.primary
  }
})