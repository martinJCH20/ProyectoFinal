import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Login from '../Scenes/Login';
import Home from '../Scenes/Home';
import Register from '../Scenes/Register';
const Stack = createStackNavigator();

const MainStackNavigator = (props) => {
  const forFade = ({current, closing}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator
      initialRouteName="Login"
      headerMode="none"
      screenOptions={{
        headerStyle: {
          height: Platform.OS === 'ios' ? 80 : 65,
        },
      }}>
      <Stack.Screen
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          title: 'Login',
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          title: 'Register',
        }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          title: 'Home',
        }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
