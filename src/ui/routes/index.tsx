import React from 'react';

// Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../pages/Home';
import ClientModal from '../components/ClientModal';

// Navigators
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ModalScreen" component={ClientModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
