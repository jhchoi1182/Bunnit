import { Dimensions, StyleSheet } from "react-native";
import { theme } from "./Theme";

export const { width: windowWidth } = Dimensions.get("window");

export const common = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    alignItems: "center",
    justifyContent: "center",
  },
});