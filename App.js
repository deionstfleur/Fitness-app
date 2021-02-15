import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import Settings from './src/Settings';
import Chest from './src/Chest';
import Cardio from './src/Cardio';
import Back from './src/Back';
import Shoulders from './src/Shoulders';
import Timer from './src/Timer';
import Progress from './src/Progress';

const Stack = createStackNavigator();

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRoute="HomeScreen"
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen name='Chest' component={Chest} />
        <Stack.Screen name='Cardio' component={Cardio} />
        <Stack.Screen name='Back' component={Back} />
        <Stack.Screen name='Shoulders' component={Shoulders} />
        <Stack.Screen name='Timer' component={Timer} />
        <Stack.Screen name='Progress' component={Progress} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App