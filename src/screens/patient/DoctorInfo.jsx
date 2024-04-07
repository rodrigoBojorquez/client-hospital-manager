import {View,Text,StyleSheet,SafeAreaView,ScrollView,Alert,TouchableOpacity,FlatList,} from "react-native";
import { useState, useEffect } from "react";
import { axiosClient } from "../../../axiosClient";
import DateTimePicker from "@react-native-community/datetimepicker";
import AvailableHours from "./components/AvailableHours";

const DoctorInfo = ({ route, navigation }) => {
  const [doctor, setDoctor] = useState({});
  const [date, setDate] = useState(new Date());
  const [availableHours, setAvailableHours] = useState([]);
  const [error, setError] = useState(null);

  const searchAvailableHours = async () => {
    try {
      const pasedDate = date.toISOString().split("T")[0];
      console.log(pasedDate);
      const rawAvailableHours = await axiosClient.get(
        `appointment/available/${doctor._id}?day=${pasedDate}`
      );
      setAvailableHours(rawAvailableHours.data.response ?? []);
      setError(false);
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) {
        setError(true);
      } else {
        Alert.alert(
          "Oops!",
          err.response.data.detail ?? "Hubo un error al obtener información"
        );
      }
    }
  };

  useEffect(() => {
    const getDoctorInfo = async () => {
      try {
        const { doctorId } = route.params ?? "";
        const response = await axiosClient.get(`/doctor/${doctorId}`);

        setDoctor(response.data.response ?? {});
      } catch (err) {
        console.error(err);
        Alert.alert("Oops!", "Hubo un error al obtener información");
      }
    };
    getDoctorInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ width: "100%", marginVertical: 20 }}>
        <View style={styles.card}>
          <Text style={styles.heading}>Información del Doctor</Text>
          <View style={styles.section}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.text}>{doctor.username}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Apellido:</Text>
            <Text style={styles.text}>{doctor.lastname}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Contacto:</Text>
            <Text style={styles.text}>{doctor.contact_number}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.text}>{doctor.email}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Especialidad:</Text>
            <Text style={styles.text}>{doctor.speciality}</Text>
          </View>
         
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Horario Laboral</Text>
          <View style={styles.section}>
            <Text style={styles.label}>Días de Trabajo:</Text>
            <Text style={styles.text}>{doctor.work_days?.join(", ")}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Hora de Inicio:</Text>
            <Text style={styles.text}>{doctor.start_work}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Hora de Finalización:</Text>
            <Text style={styles.text}>{doctor.finish_work}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Educación</Text>
          {doctor.education &&
            doctor.education.map((edu, index) => (
              <View key={index} style={styles.eduExpContainer}>
                <Text style={styles.eduExpText}>
                  Universidad: {edu.university}
                </Text>
                <Text style={styles.eduExpText}>
                  Especialidad: {edu.speciality}
                </Text>
                <Text style={styles.eduExpText}>
                  Desde: {edu.from_date} - Hasta: {edu.to_date}
                </Text>
              </View>
            ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Experiencia</Text>
          {doctor.experience &&
            doctor.experience.map((exp, index) => (
              <View key={index} style={styles.eduExpContainer}>
                <Text style={styles.eduExpText}>Clinica: {exp.clinic}</Text>
                <Text style={styles.eduExpText}>Trabajo: {exp.work}</Text>
                <Text style={styles.eduExpText}>
                  Desde: {exp.from_date} - Hasta: {exp.to_date}
                </Text>
              </View>
            ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Horas Disponibles</Text>

          <View style={styles.dateTimePickerContainer}>
            <View>
                <DateTimePicker
                style={styles.dateTimePicker}
                value={date}
                onChange={(e, selected) => setDate(selected)}
                mode="date"
                minimumDate={new Date()}
                />
            </View>
            <TouchableOpacity
              style={styles.searchButton}
              onPress={searchAvailableHours}
            >
              <Text style={styles.searchButtonText}>Buscar</Text>
            </TouchableOpacity>
          </View>

          {error ? (
            <Text style={styles.errorMessage}>
              El doctor no trabaja ese día
            </Text>
          ) : availableHours.length > 0 ? (
            availableHours.map((hour) => (
              <AvailableHours
                key={hour}
                item={hour}
                date={date.toISOString().split("T")[0]}
                navigation={navigation}
                style={styles.availableHour}
                doctor={doctor}
              />
            ))
          ) : (
            <Text style={styles.noHoursMessage}>No hay horas disponibles</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  section: {
    flexDirection: "row",
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
    marginRight: 5,
    color: "#555",
  },
  text: {
    flex: 1,
    color: "#444",
  },
  eduExpContainer: {
    marginBottom: 8,
  },
  eduExpText: {
    marginBottom: 4,
    color: "#666",
  },
  dateTimePickerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  dateTimePicker: {
    flex: 1,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  searchButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  noHoursMessage: {
    textAlign: "center",
    color: "#666",
    marginBottom: 10,
  },
});

export default DoctorInfo;
