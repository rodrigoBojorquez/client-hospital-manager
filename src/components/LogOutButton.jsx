import { TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useAppStore } from '../stores/appStore';
import * as SecureStore from "expo-secure-store";

const LogOutButton = () => {

  const logOut = useAppStore(store => store.logOut);

  const handleLogout = async () => {
    try {
        await SecureStore.deleteItemAsync("AppToken");
        logOut();
    } catch (err) {
        console.log(err);
        Alert.alert("Oops!", "Error al cerrar sesión");
    }
  }

  return (
    <TouchableOpacity
        onPress={handleLogout}
        style={{marginRight: 15}}
    >
        <MaterialIcons 
            name="logout" 
            size={25} 
            color="#FF204E" 
        />
    </TouchableOpacity>
  )
}

export default LogOutButton