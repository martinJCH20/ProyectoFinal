import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Login from '../Scenes/Login';
import Register from '../Scenes/Register';
import Dashboard from '../Scenes/Dashboard';
import RegisterPatient from '../Scenes/RegisterPatient';
import Diagnostic from '../Scenes/Diagnostic';
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
          title: 'Dashboard',
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          title: 'RegisterPatient',
        }}
        name="RegisterPatient"
        component={RegisterPatient}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
          title: 'Diagnostic',
        }}
        name="Diagnostic"
        component={Diagnostic}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
