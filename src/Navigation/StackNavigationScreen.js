import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import GraphScreen from '../Screen/GraphScreen';
import PieGraph from '../Screen/PieGraph';
import ChartScreen from '../Screen/ChartScreen';

import DummyScreen from '../Screen/DummyScreen';
import HomeScreeen from '../Screen/Projects/HomeScreeen';
import DetailsScreen from '../Screen/Projects/DetailsScreen';

const Stack = createStackNavigator();
export default function StackNavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GraphScreen"
          component={GraphScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PieGraph"
          component={PieGraph}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChartScreen"
          component={ChartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreeen"
          component={HomeScreeen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DummyScreen"
          component={DummyScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
