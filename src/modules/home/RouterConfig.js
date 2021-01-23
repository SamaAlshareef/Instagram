import * as React from 'react';

import { Text, View } from 'react-native';

import BucketListScreen from './bucketlist/view/BucketList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewsFeedScreen from './newsFeed/view/NewsFeed';
import ProfileScreen from './posts/view/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const HomeRouter = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        switch (route.name){
          case 'newsFeed':
            return(
              <Ionicons
               name={'newspaper-outline'} 
               size={size} 
               color={color} />
            )
          case 'bucketList':
            return(
              <MaterialCommunityIcons
              name={'bucket-outline'} 
              size={size} 
              color={color}
              />
            )
          case 'profile':
            return(
              <MaterialCommunityIcons
              name={'account'} 
              size={size} 
              color={color}
              />
            )  
          
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen 
        name="newsFeed" 
        component={NewsFeedScreen} 	
        options={{
          title: 'NewsFeed',
         
        }}/>
      <Tab.Screen 
        name="bucketList" 
        component={BucketListScreen} />
      <Tab.Screen
         name="profile"
        component={ProfileScreen} />
    </Tab.Navigator>
  );
}
