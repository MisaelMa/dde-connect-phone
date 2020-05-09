import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen} from '../../screens/QrView';


const Stack = createStackNavigator();

export  const QrStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Details" component={DetailsScreen} options={{title: 'About GameZone'}} />
    </Stack.Navigator>
  );
};
