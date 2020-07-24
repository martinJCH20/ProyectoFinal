import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MenuDrawer} from '../Components/Menu/MenuDrawer';
import {MainStackNavigator} from './main';
import {AuthStackNavigator} from './auth';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerStackNavigator = (props) => {
  return (
    <Drawer.Navigator
      initialRouteName={'AuthStackNavigator'}
      drawerContent={(parameters) => <MenuDrawer {...parameters} />}>
      <Drawer.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
      <Drawer.Screen name="Home" component={MainStackNavigator} />
    </Drawer.Navigator>
  );
};

export {DrawerStackNavigator};
