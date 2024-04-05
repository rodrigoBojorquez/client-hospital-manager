import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

// SCREENS
import HomeAdmin from "../screens/admin/HomeAdmin"

const Tab = createBottomTabNavigator();

const DevTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
    >
      <Tab.Screen name='Home' component={HomeAdmin} />
    </Tab.Navigator>
  )
}

export default DevTabs