import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { CalendarContext } from "./CalendarContainer";

const Header = () => {
  const { selectedYear, selectedMonth, prevMonth, nextMonth } = useContext(CalendarContext);

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

  return (
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
  );
};

export default Header;

const styles = {
  header: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
};
