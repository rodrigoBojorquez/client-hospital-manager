import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react'

const TermsCheckbox = ({ isChecked, setIsChecked }) => {
  return (
    <View style={styles.checkboxContainer}>
        <CheckBox
            value={isChecked}
            onValueChange={setIsChecked}
            style={styles.checkbox}
        />
        <Text style={styles.label}>Acepto los términos y condiciones</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
});

export default TermsCheckbox