import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
import { useState } from 'react'
import GoBackButton from '../../../components/GoBackButton';
import DualTimePicker from '../../../components/DualTimePicker';

const SetDoctorSchedule = ({ navigation }) => {

  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  const toggleDay = day => {
    if (selectedDays.includes(day)) {
        setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
        setSelectedDays([...selectedDays, day]);
    }
  };

  const handleSubmit = () => {
    const startHours = startTime.getHours();
    const startMinutes = startTime.getMinutes();
    const endHours = endTime.getHours();
    const endMinutes = endTime.getMinutes();

    const startTotalMinutes = startHours * 60 + startMinutes;
    const endTotalMinutes = endHours * 60 + endMinutes;

    if (startTotalMinutes >= endTotalMinutes) {
      Alert.alert("Error", "Horario inválido");
    } 
    else {

    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#64CCC5" }}>
            <View style={styles.container}>
                <GoBackButton 
                  onPress={() => navigation.goBack()}
                />

                <Text style={styles.title}>Selecciona tus días de trabajo</Text>
                <View style={styles.daysContainer}>
                    {daysOfWeek.map(day => (
                        <TouchableOpacity
                            key={day}
                            style={[styles.dayButton, selectedDays.includes(day) && styles.selectedDay]}
                            onPress={() => toggleDay(day)}
                        >
                            <Text style={selectedDays.includes(day) ? styles.selectedDayText : styles.dayText}>{day}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <Text style={styles.title}>Ingresa tu horario de trabajo</Text>

                <DualTimePicker 
                  setStartTime={setStartTime}
                  setEndTime={setEndTime}
                  startTime={startTime}
                  endTime={endTime}
                />

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Crear cuenta</Text>
                </TouchableOpacity>

            </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
      flexGrow: 1,
  },
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: "#FBF9F1"
  },
  title: {
      fontWeight: 'bold',
      fontSize: 22,
      color: '#64CCC5',
      marginVertical: 25,
      textAlign: "center"
  },
  daysContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
  },
  dayButton: {
      margin: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 20,
      backgroundColor: 'white',
      color: "#607274"
  },
  selectedDay: {
      backgroundColor: '#64CCC5',
  },
  dayText: {
      color: '#607274',
      fontSize: 16,
  },
  selectedDayText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  input: {
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 25,
      padding: 20,
      height: 50,
      marginVertical: 10,
      fontSize: 16,
      color: "#607274"
  },
  submitButton: {
      backgroundColor: '#64CCC5',
      borderRadius: 25,
      width: "80%",
      marginTop: 35,
      height: 50,
      alignItems: "center",
      justifyContent: "center"
  },
  submitButtonText: {
      color: '#FBF9F1',
      fontSize: 16,
      fontWeight: "bold"
  },
});

export default SetDoctorSchedule