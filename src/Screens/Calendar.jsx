import { StyleSheet, View } from "react-native";
import CalendarContainer from "../components/Calendar/CalendarContainer";
import { theme } from "../Styles/Theme";

const Calendar = () => {
  return (
    <View style={styles.container}>
      <CalendarContainer />
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
  },
});
