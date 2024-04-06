import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const HeaderGoBack = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-backspace" size={30} color="#64CCC5"/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 15,
        alignItems: "center"
    }
})

export default HeaderGoBack