import { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CalendarContainer = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  };
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);

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
    for (let p = prevDate - prevDay; p <= prevDate; p++) {
      dayArr.push(<Text key={`prev${p}`}>{p}</Text>);
    }
    for (let i = 1; i <= currentDate; i++) {
      dayArr.push(<Text key={i}>{i}</Text>);
    }
    for (let n = 1; n <= 6 - currentDay; n++) {
      dayArr.push(<Text key={`next${n}`}>{n}</Text>);
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
        <Text>week</Text>
      </View>
      <View style={styles.days}>{returnDays()}</View>
    </View>
  );
};

export default CalendarContainer;

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: "teal",
  },
  days: {
    flex: 0.75,
    flexDirection: "row",
  },
});
