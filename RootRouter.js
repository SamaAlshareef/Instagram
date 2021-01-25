import {MainRouterConfig} from './src/modules/RouterConfig';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const RootRouter = () => (
    MainRouterConfig()
  );
      
export default RootRouter;