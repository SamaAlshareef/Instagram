import * as React from 'react';

import { Text, View } from 'react-native';

import AddPost from './view/AddPost';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewsFeedScreen from './view/NewsFeed';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const NewsFeedRouterConfig = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name= 'newsfeed' component={NewsFeedScreen}
       options = {{
        title: 'NewsFeed',
        headerStyle: {
          backgroundColor: 'white',
          elevation: 0,
        },
        headerTitleAlign: 'center',
    
        headerTitleStyle: {
          fontSize: 17,
        },
        headerTintColor: 'black',
      }}/>
      <Stack.Screen name = 'addPost' component = {AddPost}
      options = {{
        title: 'Add Post',
        headerStyle: {
          backgroundColor: 'white',
          elevation: 0,
        },
        headerTitleAlign: 'center',
    
        headerTitleStyle: {
          fontSize: 17,
        },
        headerTintColor: 'black',
      }}/>
    </Stack.Navigator>
    
  );
}
