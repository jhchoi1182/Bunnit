import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { windowWidth } from "../../Styles/UI";
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

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // 헤더 로직

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
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={prevMonth}>
          <MaterialCommunityIcons name="chevron-left" size={30} color="#4bcffa" />
        </TouchableOpacity>
        <Text style={{ fontWeight: 700 }}>
          {monthNames[selectedMonth - 1]} {selectedYear}
        </Text>
        <TouchableOpacity onPress={nextMonth}>
          <MaterialCommunityIcons name="chevron-right" size={30} color="#4bcffa" />
        </TouchableOpacity>
      </View>
      <Week />
      <Day
        today={today}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
    </View>
  );
};

export default CalendarContainer;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    flex: 0.55,
    paddingHorizontal: 10,
  },
  header: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
