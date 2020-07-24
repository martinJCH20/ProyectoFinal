import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Scenes/Login';
import {MainStackNavigator} from './main';
const Stack = createStackNavigator();

const AuthStackNavigator = (props) => {
  const forFade = ({current, closing}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator
      initialRouteName="Login"
      headerMode="none"
      gestureEnabled={false}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          cardStyleInterpolator: forFade,
        }}
      />
       <Stack.Screen
        name="MainStackNavigator"
        component={MainStackNavigator}
        options={{
          cardStyleInterpolator: forFade
           }}
      />
    </Stack.Navigator>
  );
};

export {AuthStackNavigator};
