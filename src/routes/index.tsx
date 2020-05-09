import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {NotificationStakc} from './stacks/NotificationStack';
import {QrStack} from './stacks/QrStack';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={NotificationStakc} />
        <Drawer.Screen name="About" component={QrStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
