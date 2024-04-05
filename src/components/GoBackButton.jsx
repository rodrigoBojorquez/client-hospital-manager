import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const GoBackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <MaterialIcons name="keyboard-backspace" size={35} color="#64CCC5"/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        left: 20,
        top: 20
    }
})

export default GoBackButton