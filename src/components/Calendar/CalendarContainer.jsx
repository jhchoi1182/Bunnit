import { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../Styles/Theme";

const { width: windowWidth } = Dimensions.get("window");

const CalendarContainer = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  };
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);

  const week = ["Sun", "Mon", "Tue", "Wen", "Tur", "Fri", "Sat"];

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

  // 달력에 표시될 이전 달 날짜

  const lastMonthDate = new Date(selectedYear, selectedMonth - 1, 0);
  const prevDate = lastMonthDate.getDate();
  const prevDay = lastMonthDate.getDay();

  // 달력에 표시될 이번 달 날짜

  const MonthDate = new Date(selectedYear, selectedMonth, 0);
  const currentDate = MonthDate.getDate();
  const currentDay = MonthDate.getDay();

  const returnDays = () => {
    let dayArr = [];
    for (let p = prevDay === 6 ? 32 : prevDate - prevDay; p <= prevDate; p++) {
      dayArr.push(
        <Text style={{ ...styles.day, color: theme.inactive }} key={`prev${p}`}>
          {p}
        </Text>
      );
    }
    for (let i = 1; i <= currentDate; i++) {
      dayArr.push(
        <Text style={styles.day} key={i}>
          {i}
        </Text>
      );
    }
    for (let n = 1; n <= (dayArr.length === 42 ? 0 : 14); n++) {
      dayArr.push(
        <Text style={{ ...styles.day, color: theme.inactive }} key={`next${n}`}>
          {n}
        </Text>
      );
    }
    return dayArr;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={prevMonth}>
          <MaterialCommunityIcons name="chevron-left" size={30} color="#4bcffa" />
        </TouchableWithoutFeedback>
        <Text style={{ fontWeight: 700 }}>
          {selectedMonth} {selectedYear}
        </Text>
        <TouchableWithoutFeedback onPress={nextMonth}>
          <MaterialCommunityIcons name="chevron-right" size={30} color="#4bcffa" />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.week}>
        {week.map((v, i) => (
          <Text key={i} style={{ ...styles.weekDay, color: (v === "Sun" && "red") || (v === "Sat" && "blue") }}>
            {v}
          </Text>
        ))}
      </View>
      <View style={styles.days}>{returnDays()}</View>
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
  week: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
  },
  weekDay: {
    width: (windowWidth - 20) / 7,
    textAlign: "center",
  },
  days: {
    flex: 0.75,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  day: {
    width: (windowWidth - 21) / 7,
    textAlign: "center",
    paddingVertical: 10,
  },
});
