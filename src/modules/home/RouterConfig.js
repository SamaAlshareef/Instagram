import * as React from "react";

import { Text, View } from "react-native";

import { BucketListRouterConfig } from "./bucketlist/RouterConfig";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NewsFeedRouterConfig } from "./newsFeed/RouterConfig";
import { ProfileRouterConfig } from "./posts/RouterConfig";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const HomeRouter = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "newsFeed":
              return (
                <Ionicons
                  name={"newspaper-outline"}
                  size={size}
                  color={color}
                />
              );
            case "BucketList":
              return (
                <MaterialCommunityIcons
                  name={"bucket-outline"}
                  size={size}
                  color={color}
                />
              );
            case "profile":
              return (
                <MaterialCommunityIcons
                  name={"account"}
                  size={size}
                  color={color}
                />
              );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="newsFeed"
        component={NewsFeedRouterConfig}
        options={{
          title: "NewsFeed",
        }}
      />
      <Tab.Screen name="BucketList" component={BucketListRouterConfig} />
      <Tab.Screen name="profile" component={ProfileRouterConfig} />
    </Tab.Navigator>
  );
};
