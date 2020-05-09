import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Notification from './screens/Notification';
import {DetailsScreen} from './screens/QrView';
import {useWindowDimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
import Navigator from './routes';

export default function App() {
  const dimensions = useWindowDimensions();
  return (
    <Navigator/>
  );
}
