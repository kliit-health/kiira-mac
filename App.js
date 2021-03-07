import React, {useRef, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import Auth from './src/screens/auth';
import AuthLoading from './src/screens/auth/authLoading';
import Chat from './src/screens/dashboard/ask';
import Video from './src/screens/dashboard/appointments';
import Prescription from './src/screens/dashboard/prescription';
import Settings from './src/screens/dashboard/settings';
import PaitentProfile from './src/screens/dashboard/appointments/patientProfile';
import {setAppScreen} from './src/redux/actions/authLoading';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Auth} />
      <Stack.Screen name="AuthLoading" component={AuthLoading} />
    </Stack.Navigator>
  );
}

function DashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Video" component={Video} />
      <Stack.Screen name="Prescription" component={Prescription} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="PaitentProfile" component={PaitentProfile} />
    </Stack.Navigator>
  );
}

function App() {
  const dispatch = useDispatch();
  const navigationRef = useRef();
  const routeNameRef = useRef();

  useEffect(() => (console.disableYellowBox = true));

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          const obj = {
            previousRouteName,
            currentRouteName,
          };
          dispatch(setAppScreen(obj));
        }

        routeNameRef.current = currentRouteName;
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="DashboardStack" component={DashboardStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
