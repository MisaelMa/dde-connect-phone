import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Header(props: { children: React.ComponentType<any>; }) {
  return (
    <Stack.Navigator initialRouteName='About'
                     screenOptions={{
                       headerStyle: {
                         backgroundColor: '#999',
                       },
                       headerTintColor: '#fff',
                       headerTitleStyle: {
                         fontWeight: 'bold',
                       },
                     }}
    >
      <Stack.Screen
        name='About'
        component={props.children}
        options={{
          title: 'About',
        }}
      />
    </Stack.Navigator>
  );
}
