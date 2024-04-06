import { View, Text, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { axiosClient } from '../../../axiosClient';
import { useAppStore } from '../../stores/appStore';
import dayjs from 'dayjs';
import { Feather } from '@expo/vector-icons';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  const profileData = useAppStore((store) => store.profileData);

  const deleteAppoint = async (id) => {
    try {
      const response = await axiosClient.delete(`/appointment/${id}`)
      const newAppointments = appointments.filter((appoint) => appoint._id !== id);
      setAppointments(newAppointments);
      console.log(response);
    } catch (err) {
      console.log(err);
      Alert.alert("Oops!", "Hubo un error al eliminar la cita");
    }
  }
 
  useEffect(() => {
    const getAppointments = async () => {
      try {
        const response = await axiosClient.get(`/appointment/patient/${profileData.id}`);
        setAppointments(response.data.response ?? []);
      } catch (err) {
        Alert.alert('Oops!', 'Hubo un error al obtener la información');
      }
    };
    getAppointments();
  }, [profileData.id]);

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
      <Text style={styles.title}>Mis Citas</Text>
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