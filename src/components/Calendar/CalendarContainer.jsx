import { StyleSheet, Text, View } from "react-native";

const CalendarContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>header</Text>
      </View>
      <View style={styles.week}>
        <Text>week</Text>
      </View>
      <View style={styles.days}>
        <Text>days</Text>
      </View>
    </View>
  );
};

export default CalendarContainer;

const styles = StyleSheet.create({
  container: {
    flex: 0.55,
  },
  header: {
    flex: 0.15,
    backgroundColor: "pink",
  },
  week: {
    flex: 0.1,
    backgroundColor: "teal",
  },
  days: {
    flex: 0.75,
    backgroundColor: "tomato",
  },
});
