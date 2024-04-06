import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, SafeAreaView, Alert } from 'react-native';
import { useState } from 'react'
import GoBackButton from '../../../components/GoBackButton';
import DualTimePicker from '../../../components/DualTimePicker';
import { useAppStore } from '../../../stores/appStore';
import { axiosClient } from "../../../../axiosClient"

const SetDoctorSchedule = ({ navigation }) => {

  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const setDoctorData = useAppStore(state => state.setDoctorData);
  const doctorData = useAppStore(state => state.doctorData);

  const daysOfWeek = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

  const toggleDay = day => {
    if (selectedDays.includes(day)) {
        setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
        setSelectedDays([...selectedDays, day]);
    }
  };

  const handleSubmit = async () => {
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
      try {
        const starkWorkParsed = startTime.toISOString().split("T")[1];
        const finishWorkParsed = endTime.toISOString().split("T")[1];

        console.log(starkWorkParsed, finishWorkParsed);

        setDoctorData({
          startWork: starkWorkParsed,
          finishWork: finishWorkParsed,
          workDays: selectedDays
        })


        const response = await axiosClient.post("/public/doctor", {
          username: doctorData.userName,
          lastname: doctorData.lastName,
          email: doctorData.email,
          password: doctorData.password,
          rol: "doctor",
          speciality: doctorData.speciality,
          start_work: doctorData.startWork,
          finish_work: doctorData.finishWork,
          work_days: doctorData.workDays,
          contact_number: doctorData.contactNumber,
          license_number: doctorData.licenseNumber,
          clinic: doctorData.clinic,
        })

        Alert.alert("Genial!", response.data.message ?? "Te cuenta ha sido creada con éxito");
        console.log(doctorData);

        setTimeout(() => {
          navigation.navigate("Login");
        }, 1000);
      } catch (err) {
        console.log(err);
        Alert.alert("Oops!", "Hubo un error al crear tu cuenta");
      }
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