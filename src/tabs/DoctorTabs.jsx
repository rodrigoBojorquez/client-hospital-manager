import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogOutButton from '../components/LogOutButton';

//SCREENS
import HomeDoctor from "../screens/doctor/HomeDoctor";

const Tab = createBottomTabNavigator();

const DoctorTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerRight: (props) => <LogOutButton />
      }}
    >
      <Tab.Screen name='Home' component={HomeDoctor} />

      {/* MAS TABS AQUI */}
    </Tab.Navigator>
  )
}

export default DoctorTabs;