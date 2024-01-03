import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {SCREENS} from '../constants';
import {EventDetailScreen, EventsListScreen} from '../screens';
import {RootStackParamList} from './@types';

// Create a stack navigator.
const Stack = createNativeStackNavigator<RootStackParamList>();

// This is the root navigator. It's used to switch between screens.
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.EVENTS_LIST}>
        <Stack.Screen
          name={SCREENS.EVENTS_LIST}
          component={EventsListScreen}
          options={{title: 'Events List'}}
        />
        <Stack.Screen
          name={SCREENS.EVENT_DETAIL}
          component={EventDetailScreen}
          options={{title: 'Event Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
