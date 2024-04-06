import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import LogOutButton from '../components/LogOutButton';
import { Entypo } from '@expo/vector-icons';

// SCREENS
import HomePatient from "../screens/patient/HomePatient";

const Tab = createBottomTabNavigator();

const PatientTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'

      // TABS ICONS 

      screenOptions={({ route }) => ({
        headerRight: (props) => <LogOutButton />,
        tabBarIcon: ({ foucused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            return <Entypo name='home' size={25} color="black" />
          }
        },
      })}
    >
      <Tab.Screen name='Home' component={HomePatient} />

      {/* AGREGAR MAS TABS AQUI */}
    </Tab.Navigator>
  )
}

export default PatientTabs