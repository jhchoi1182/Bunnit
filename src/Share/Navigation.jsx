import React, { Suspense } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActivityIndicator, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { common } from "../Styles/UI";
import { theme } from "../Styles/Theme";
import Home from "../Screens/Home";

const Calendar = React.lazy(() => import("../Screens/Calendar"));
const Library = React.lazy(() => import("../Screens/Library"));
const MyPage = React.lazy(() => import("../Screens/MyPage"));

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Suspense
      fallback={
        <View style={common.container}>
          <ActivityIndicator size="large" />
        </View>
      }
    >
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: { fontWeight: 700 },
            tabBarActiveTintColor: theme.textColor,
          }}
        >
          <Tab.Screen
            name="HOME"
            component={Home}
            options={{
              tabBarIcon: ({ size, color }) => <Entypo name="home" size={size} color={color} />,
            }}
          />
          <Tab.Screen
            name="CALENDAR"
            component={Calendar}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialCommunityIcons name="calendar-month-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="LIBRARY"
            component={Library}
            options={{
              tabBarIcon: ({ size, color }) => <FontAwesome5 name="dumbbell" size={size} color={color} />,
            }}
          />
          <Tab.Screen
            name="MY PAGE"
            component={MyPage}
            options={{
              tabBarIcon: ({ focused, size, color }) => (
                <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Suspense>
  );
};

export default Navigation;
