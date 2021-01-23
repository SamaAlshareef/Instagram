// In App.js in a new project

import * as React from "react";

import { Text, View } from "react-native";
import { applyMiddleware, createStore } from 'redux';

import {HomeRouter} from './src/modules/home/RouterConfig';
import LoginScreen from "./src/modules/login/view/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStackNavigator } from "@react-navigation/stack";
import {rootReducer} from './src/rootReducer';
import rootSaga from "./src/rootSaga";

const Stack = createStackNavigator();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

function App(route) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name= 'login' component={LoginScreen} 
         
          />
          <Stack.Screen name = 'home' component = {HomeRouter} options={{ headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
