import React from "react";
import LunchScreen from "./scenes/Lunch";
import DinnerScreen from "./scenes/Dinner";
import { createBottomTabNavigator  } from 'react-navigation';

export default createBottomTabNavigator({
    Lunch: LunchScreen,
    Dinner: DinnerScreen
});
