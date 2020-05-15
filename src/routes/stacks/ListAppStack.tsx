import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen} from '../../screens/QrView';
import Notification from '../../screens/Notification';
import ListApps from '../../screens/ListApps';

const Stack = createStackNavigator();

export const ListAppStakc = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={ListApps}
        options={{title: 'Lists Apps'}}
      />
    </Stack.Navigator>
  );
};
