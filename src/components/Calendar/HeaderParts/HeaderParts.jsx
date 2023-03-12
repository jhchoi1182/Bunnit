import { Pressable, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CalendarContext } from "../../../Hooks.js/Hook";
import { useContext } from "react";

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

// 헤더 베이스

export const CalenderHeader = ({ children }) => {
  return <View style={{ flex: 0.15, justifyContent: "center" }}>{children}</View>;
};

// 레이아웃

const SpaceBetween = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {children}
    </View>
  );
};

// 이전 달 버튼

const prevMonth = () => {
  const { prevMonth } = useContext(CalendarContext);
  return (
    <Pressable onPress={prevMonth} pressRetentionOffset={100}>
      <MaterialCommunityIcons name="chevron-left" size={30} color="#4bcffa" />
    </Pressable>
  );
};

// 다음 달 버튼

const nextMonth = ({}) => {
  const { nextMonth } = useContext(CalendarContext);
  return (
    <Pressable onPress={nextMonth} pressRetentionOffset={100}>
      <MaterialCommunityIcons name="chevron-right" size={30} color="#4bcffa" />
    </Pressable>
  );
};

// 표시될 날짜

const DateText = () => {
  const { selectedMonth, selectedYear } = useContext(CalendarContext);
  return (
    <Text style={{ fontWeight: 700 }}>
      {monthNames[selectedMonth - 1]} {selectedYear}
    </Text>
  );
};

// 명시적 재선언

CalenderHeader.SpaceBetween = SpaceBetween;
CalenderHeader.prevMonth = prevMonth;
CalenderHeader.nextMonth = nextMonth;
CalenderHeader.DateText = DateText;
