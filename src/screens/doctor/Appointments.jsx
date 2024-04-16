import { View, Text, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { axiosClient } from '../../../axiosClient';
import { useAppStore } from '../../stores/appStore';
import dayjs from 'dayjs';
import { Feather } from '@expo/vector-icons';

const Appointments = () => {
  const profileData = useAppStore((store) => store.profileData);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getAppointmentsData = async () => {
      try {
        const patientId = profileData.id;
        const response = await axiosClient.get(
          `/appointment/doctor/${patientId}?patient_id=${patientId}`
        );
        setAppointments(response.data.response ?? []);
        console.log(response.data.response); // Imprimir los datos de las citas
      } catch (err) {
        console.log(err);
        Alert.alert("Oops!", "Hubo un error al obtener información");
      }
    };
    getAppointmentsData();
  }, []);

  const renderAppointment = ({ item }) => {
    const formattedDate = dayjs(item.date).format('DD/MM/YYYY HH:mm');
    return (
      <View style={styles.appointmentCard}>
        <View style={{flexDirection: "column", gap: 5}}>
          <Text style={styles.dateText}>{formattedDate}</Text>
          <Text style={styles.commentText}>{item.commentary}</Text>
        </View>
        <TouchableOpacity onPress={() => deleteAppoint(item._id)}>
          <Feather name="trash-2" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Citas Agendadas</Text>
      <FlatList
        data={appointments}
        renderItem={renderAppointment}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  appointmentCard: {
    backgroundColor: '#f9f9f9',
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentText: {
    fontSize: 14,
  },
});

export default Appointments;