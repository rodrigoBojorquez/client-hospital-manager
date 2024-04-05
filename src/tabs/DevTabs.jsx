import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import LogOutButton from '../components/LogOutButton'

// SCREENS
import HomeAdmin from "../screens/admin/HomeAdmin"

const Tab = createBottomTabNavigator();

const DevTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerRight: (props) => <LogOutButton />
      }}
    >
      <Tab.Screen name='Home' component={HomeAdmin} />
    </Tab.Navigator>
  )
}

export default DevTabs;