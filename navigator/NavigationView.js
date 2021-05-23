import React from 'react';
import {View, Text} from 'react-native';
//import library
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

//import the created file
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const HomeStack = createStackNavigator();
const Stack = createBottomTabNavigator();

function Home() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="HomeDetail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}
//*****8 */

const NavigationView = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationView;
