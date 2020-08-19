import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from '../Pages/Landing';
import GiveClasses from '../Pages/GiveClasses';
import StudyTabs from './StudyTabs';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="GiveClasses" component={GiveClasses} />
        <Stack.Screen name="Study" component={StudyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack;