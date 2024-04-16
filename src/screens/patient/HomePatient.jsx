import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, Alert } from 'react-native';
import tw from 'twrnc'; // Importación de twrnc para Tailwind CSS
import Buscar from "../../../assets/Buscar.png";
import { axiosClient } from '../../../axiosClient';
import { useAppStore } from '../../stores/appStore';
import dayjs from 'dayjs';

const HomePatient = () => {
    const [search, setSearch] = React.useState('');
    const [userInfo, setUserInfo] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [doctorsInfo, setDoctorsInfo] = useState({});
    const profileData = useAppStore(state => state.profileData);

    const updateSearch = (text) => {
        setSearch(text);
    };

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const token = profileData.token;
    
                if (!token) {
                    throw new Error('Token de autenticación no encontrado');
                }
    
                const response = await axiosClient.get(`/user/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserInfo(response.data); // Actualiza el estado de userInfo con la información del perfil
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
    
        getUserInfo();
    }, [profileData.token]);
    
    
    useEffect(() => {
        const getAppointmentsData = async () => {
            try {
                const patientId = profileData.id;
                const response = await axiosClient.get(`/appointment/patient/${patientId}`);
                setAppointments(response.data.response ?? []);
    
                // Obtener información de los doctores
                const doctorIds = response.data.response.map(appointment => appointment.doctor_id);
                const doctorInfoPromises = doctorIds.map(doctorId => axiosClient.get(`/doctor/${doctorId}`));
                const doctorInfoResponses = await Promise.all(doctorInfoPromises);
                const doctorsInfo = {};
                doctorInfoResponses.forEach(response => {
                    doctorsInfo[response.data._id] = response.data;
                });
                setDoctorsInfo(doctorsInfo);
            } catch (err) {
                console.log(err);
                Alert.alert("Oops!", "Hubo un error al obtener información");
            }
        };
        getAppointmentsData();
    }, [profileData.id]);

    return (
        <ScrollView style={tw`bg-white pt-8 h-full`}>
            <View style={tw`items-center bg-white`}>
                <View style={tw`flex flex-row items-center bg-white justify-around`}>
                    <View style={tw`flex items-center`}>
                        <Text style={tw`text-2xl font-bold text-[#858585]`}>Bienvenido,</Text>
                        <Text style={tw`text-2xl font-bold`}>{userInfo ? userInfo.username : 'Nombre de Usuario'}</Text>
                    </View>
                </View>
                <View style={tw`flex flex-row mx-4 items-center mt-4 px-4 py-4 bg-gray-200 rounded-lg`}>
                    <Image source={Buscar} style={tw`mr-3`} />
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Buscar un Doctor"
                        onChangeText={updateSearch}
                        value={search}
                    />
                </View>
                <Text style={tw`text-2xl mt-4 font-bold`}>Citas Programadas</Text>

                {/* Mostrar las tres primeras citas */}
                {appointments.slice(0, 3).map(appointment => (
                    <View key={appointment._id} style={tw`mt-4 px-4 py-4 bg-white shadow-md rounded-lg`}>
                        <Text style={tw`text-lg font-semibold text-gray-800`}>{`Fecha de la cita: ${dayjs(appointment.date).format('DD/MM/YYYY HH:mm')}`}</Text>
                        <Text style={tw`text-base text-gray-600`}>{`Comentario: ${appointment.commentary}`}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default HomePatient;
