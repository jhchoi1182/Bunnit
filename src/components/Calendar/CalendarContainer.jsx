import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { CalendarContext } from "../../Hooks.js/Hook";
import { windowWidth } from "../../Styles/UI";
import Header from "./Header";
import Week from "./Week";
import Day from "./Day";

const CalendarContainer = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);

  // 달 이동 로직

  const prevMonth = () => {
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear((prev) => prev - 1);
    } else {
      setSelectedMonth((prev) => prev - 1);
    }
  };

  const nextMonth = () => {
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear((prev) => prev + 1);
    } else {
      setSelectedMonth((prev) => prev + 1);
    }
  };

  return (
    <CalendarContext.Provider value={{ today, selectedYear, selectedMonth, prevMonth, nextMonth }}>
      <View style={styles.container}>
        <Header />
        <Week />
        <Day />
      </View>
    </CalendarContext.Provider>
  );
};

export default CalendarContainer;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    flex: 0.55,
    paddingHorizontal: 10,
  },
});
