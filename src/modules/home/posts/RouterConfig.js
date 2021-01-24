import * as React from 'react';

import Profile from './view/Profile';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const ProfileRouterConfig = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name= 'profile' component={Profile} 
       options = {{
        title: 'Profile',
        headerStyle: {
          backgroundColor: 'white',
          elevation: 0,
        },
        headerTitleAlign: 'center',
    
        headerTitleStyle: {
          fontSize: 17,
        },
        headerTintColor: 'black',
      }}
    />
    </Stack.Navigator>
    
  );
}
