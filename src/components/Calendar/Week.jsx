import React from "react";
import { Dimensions, Text, View } from "react-native";

const { width: windowWidth } = Dimensions.get("window");

const Week = () => {
  const week = ["Sun", "Mon", "Tue", "Wen", "Tur", "Fri", "Sat"];
  return (
    <View style={styles.week}>
      {week.map((v, i) => (
        <Text key={i} style={{ ...styles.weekDay, color: (v === "Sun" && "red") || (v === "Sat" && "blue") }}>
          {v}
        </Text>
      ))}
    </View>
  );
};

export default React.memo(Week);

const styles = {
  week: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
  },
  weekDay: {
    width: (windowWidth - 20) / 7,
    textAlign: "center",
  },
};
