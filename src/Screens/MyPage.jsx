import { StyleSheet, Text, View } from "react-native";
import { theme } from "../Styles/Theme";

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
    backgroundColor: theme.bg,
    alignItems: "center",
    justifyContent: "center",
  },
});
