import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
//import AppNavigator from "./Routes";
import Header from "./components/Header";
import LunchScreen from "./scenes/Lunch"
import DinnerScreen from './scenes/Dinner';
import { createMaterialTopTabNavigator  } from 'react-navigation';

const TabNav = createMaterialTopTabNavigator({
  Lunch: LunchScreen,
  Dinner: DinnerScreen
},
{
  initialRouteName : 'Lunch',
  tabBarOptions:{
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style:{
      backgroundColor: 'white'
    },
    indicatorStyle:{
      backgroundColor: 'red'
    }
  }
}
);

export default class App extends React.Component {
  render() {
    return (
     
        <SafeAreaView style={{ flex: 1}}>
        <Header/>
        <TabNav/>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
