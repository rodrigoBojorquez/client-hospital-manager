import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// STACKS AND SCREENS
import Login from '../screens/auth/login/Login';
import CreateDoctorStack from './CreateDoctorStack';
import CreatePatientStack from './CreatePatientStack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='CreateDoctor' component={CreateDoctorStack} />
        <Stack.Screen name='CreatePatient' component={CreatePatientStack} />
    </Stack.Navigator>
  )
}

export default AuthStack