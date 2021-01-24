import * as React from "react";

import { Text, View } from "react-native";

import BucketListScreen from "./view/BucketList";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const BucketListRouterConfig = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BucketList"
        component={BucketListScreen}
        options={{
          title: "BucketList",
          headerStyle: {
            backgroundColor: "white",
            elevation: 0,
          },
          headerTitleAlign: "center",

          headerTitleStyle: {
            fontSize: 17,
          },
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
};
