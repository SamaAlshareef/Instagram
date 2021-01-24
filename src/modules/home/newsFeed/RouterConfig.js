import * as React from 'react';

import { Text, View } from 'react-native';

import AddPost from './view/AddPost';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewsFeedScreen from './view/NewsFeed';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const RouterConfig = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name= 'newsfeed' component={NewsFeedScreen}/>
      <Stack.Screen name = 'addPost' component = {AddPost}/>
    </Stack.Navigator>
    
  );
}
