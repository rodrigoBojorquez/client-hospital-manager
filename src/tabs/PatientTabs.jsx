import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import LogOutButton from '../components/LogOutButton';

// SCREENS
import HomePatient from "../screens/patient/HomePatient";

const Tab = createBottomTabNavigator();

const PatientTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerRight: (props) => <LogOutButton />
      }}
    >
      <Tab.Screen name='Home' component={HomePatient} />

      {/* AGREGAR MAS TABS AQUI */}
    </Tab.Navigator>
  )
}

export default PatientTabs