import { View, Text, Button, StyleSheet, Platform, Alert } from 'react-native';
import { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';

const DualTimePicker = ({ setStartTime, setEndTime, startTime, endTime }) => {

    const onChangeStart = (event, selectedDate) => {
        setStartTime(selectedDate);
    };

    const onChangeEnd = (event, selectedDate) => {
        setEndTime(selectedDate);
    };

  return (
    <View style={styles.dateContainer}>
        <DateTimePicker
            testID="dateTimePicker"
            value={startTime}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onChangeStart}
        />

        <AntDesign 
            name="caretright" 
            size={20} 
            color="#607274" 
        />

        <DateTimePicker
            testID="dateTimePicker"
            value={endTime}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onChangeEnd}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    dateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 15
    }
});

export default DualTimePicker