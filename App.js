// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LearnScreen from './screens/LearnScreen';
import PlayScreen from './screens/PlayScreen';
import AlphabetScreen from './screens/AlphabetScreen';
import NumberScreen from './screens/NumberScreen';
import AnimalScreen from './screens/AnimalScreen';
import VegetableScreen from './screens/VegetableScreen';
import FruitScreen from './screens/FruitScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Learn" component={LearnScreen} />
        <Stack.Screen name="Play" component={PlayScreen} />
        <Stack.Screen name="Alphabet" component={AlphabetScreen} />
        <Stack.Screen name="Number" component={NumberScreen} />
        <Stack.Screen name="Animal" component={AnimalScreen} />
        <Stack.Screen name="vegetable" component={VegetableScreen} />
        <Stack.Screen name="Fruit" component={FruitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;