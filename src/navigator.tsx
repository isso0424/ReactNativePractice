import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MainPage from "./main";
import SecondPage from "./second";

const Navigator = createStackNavigator();

const MainNavigator = () => 
  (
    <Navigator.Navigator initialRouteName="Home">
      <Navigator.Screen name="Home" component={MainPage}/>
      <Navigator.Screen name="Second" component={SecondPage}/>
    </Navigator.Navigator>
  );

export default MainNavigator;
