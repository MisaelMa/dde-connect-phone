import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen} from '../../screens/QrView';
import Notification from '../../screens/Notification';


const Stack = createStackNavigator();

export  const NotificationStakc = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notification" component={Notification} options={{title: 'Notification GameZone'}} />
    </Stack.Navigator>
  );
};
