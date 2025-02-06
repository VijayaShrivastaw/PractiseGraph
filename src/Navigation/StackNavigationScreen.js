import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GraphScreen from '../Screen/GraphScreen';
import PieGraph from '../Screen/PieGraph';
import ChartScreen from '../Screen/ChartScreen';

const Stack = createStackNavigator();
export default function StackNavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GraphScreen"
          component={GraphScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PieGraph"
          component={PieGraph}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChartScreen"
          component={ChartScreen}
          options={{ headerShown: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
