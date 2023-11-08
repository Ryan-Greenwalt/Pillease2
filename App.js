import { Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './app/screens/HomeStackScreen';
import SettingsStackScreen from './app/screens/SettingsStackScreen';
import MoodLogStackScreen from './app/screens/MoodLogStackScreen';

const NavBar = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavBar.Navigator screenOptions={{ headerShown: false }}>
        <NavBar.Screen name="Home" component={HomeStackScreen}/> 
        <NavBar.Screen name="Mood Log" component={MoodLogStackScreen}/> 
        <NavBar.Screen name="Settings" component={SettingsStackScreen}/> 
      </NavBar.Navigator>
    </NavigationContainer>
  );
}

