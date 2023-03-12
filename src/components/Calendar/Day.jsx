import React, { useMemo, useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { windowWidth } from "../../Styles/UI";
import { theme } from "../../Styles/Theme";

const Week = ({ today, selectedYear, selectedMonth, prevMonth, nextMonth }) => {
  const [selectedDay, setSelectedDay] = useState({});

  // 달력에 저번 달, 이번 달 날짜 표시하는 데 쓰일 재료들

  const showDay = useMemo(() => {
    const lastMonthDate = new Date(selectedYear, selectedMonth - 1, 0);
    const MonthDate = new Date(selectedYear, selectedMonth, 0);

    const prevDate = lastMonthDate.getDate();
    const prevDay = lastMonthDate.getDay();
    const currentDate = MonthDate.getDate();
    return { prevDate, prevDay, currentDate };
  }, []);

  // 오늘, 선택된 날짜 표시하는 로직

  const dayColor = (i) => {
    if (selectedDay.year === selectedYear && selectedDay.month === selectedMonth && selectedDay.day === i)
      return { ...styles.today, borderColor: "red" };
    else if (today.year === selectedYear && today.month === selectedMonth && today.day === i)
      return { ...styles.today };
  };

  // 달력에 날짜 표시하는 로직

  const returnDays = () => {
    let dayArr = [];
    for (let p = showDay.prevDay === 6 ? 32 : showDay.prevDate - showDay.prevDay; p <= showDay.prevDate; p++) {
      dayArr.push(
        <TouchableWithoutFeedback key={`prev_${p}`} onPress={prevMonth}>
          <View style={styles.day}>
            <Text style={{ ...styles.dayText, color: theme.inactive }}>{p}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
    for (let i = 1; i <= showDay.currentDate; i++) {
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
        <TouchableWithoutFeedback key={`next_${n}`} onPress={nextMonth}>
          <View style={styles.day}>
            <Text style={{ ...styles.dayText, color: theme.inactive }}>{n}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    }
    return dayArr;
  };

  return <View style={styles.days}>{returnDays()}</View>;
};

export default Week;

const styles = {
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
};
