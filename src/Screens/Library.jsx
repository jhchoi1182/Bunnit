import { StyleSheet, Text, View } from "react-native";
import { theme } from "../Styles/Theme";

const Library = () => {
  return (
    <View style={styles.container}>
      <Text>Library</Text>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    alignItems: "center",
    justifyContent: "center",
  },
});
