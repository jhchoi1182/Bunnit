import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const CalendarContainer = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  };
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);

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
        <Text>header</Text>
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
    flexDirection: "row",
  },
});
