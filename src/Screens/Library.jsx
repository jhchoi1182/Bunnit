import { StyleSheet, Text, View } from "react-native";

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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
