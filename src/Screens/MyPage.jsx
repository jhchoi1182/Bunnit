import { StyleSheet, Text, View } from "react-native";

const MyPage = () => {
  return (
    <View style={styles.container}>
      <Text>MyPage</Text>
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
