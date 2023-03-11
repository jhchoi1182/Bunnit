import { useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../Styles/Theme";

const { width: windowWidth } = Dimensions.get("window");

const CalendarContainer = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };
  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);
  const [selectedDay, setSelectedDay] = useState("");

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
  const week = () => {
    const week = ["Sun", "Mon", "Tue", "Wen", "Tur", "Fri", "Sat"];
    return week.map((v, i) => (
      <Text key={i} style={{ ...styles.weekDay, color: (v === "Sun" && "red") || (v === "Sat" && "blue") }}>
        {v}
      </Text>
    ));
  };

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

  // 오늘, 선택된 날짜 표시하는 로직

  const dayColor = (i) => {
    if (today.year === selectedYear && today.month === selectedMonth && today.day === i) return { ...styles.today };
    else if (selectedDay.year === selectedYear && selectedDay.month === selectedMonth && selectedDay.day === i)
      return { ...styles.today, borderColor: "red" };
  };

  // 달력 날짜 표시하는 로직

  const returnDays = () => {
    let dayArr = [];
    for (let p = prevDay === 6 ? 32 : prevDate - prevDay; p <= prevDate; p++) {
      dayArr.push(
        <TouchableWithoutFeedback key={`prev${p}`} onPress={prevMonth}>
          <View style={styles.day}>
            <Text style={{ ...styles.dayText, color: theme.inactive }}>{p}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
    for (let i = 1; i <= currentDate; i++) {
      dayArr.push(
        <TouchableWithoutFeedback
          key={i}
          onPress={() => setSelectedDay({ year: selectedYear, month: selectedMonth, day: i })}
        >
          <View style={styles.day}>
            <Text style={{ ...styles.dayText, ...dayColor(i) }}>{i}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
    for (let n = 1; n <= (dayArr.length === 42 ? 0 : 14); n++) {
      dayArr.push(
        <TouchableWithoutFeedback key={`next${n}`} onPress={nextMonth}>
          <View style={styles.day}>
            <Text style={{ ...styles.dayText, color: theme.inactive }}>{n}</Text>
          </View>
        </TouchableWithoutFeedback>
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
          {monthNames[selectedMonth - 1]} {selectedYear}
        </Text>
        <TouchableWithoutFeedback onPress={nextMonth}>
          <MaterialCommunityIcons name="chevron-right" size={30} color="#4bcffa" />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.week}>{week()}</View>
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
    alignItems: "center",
    paddingVertical: 5,
  },
  dayText: {
    width: 30,
    height: 30,
    textAlign: "center",
    paddingTop: 5,
  },
  today: {
    fontWeight: 700,
    borderWidth: 1,
    borderRadius: 100,
    borderStyle: "solid",
    borderColor: "blue",
  },
});
