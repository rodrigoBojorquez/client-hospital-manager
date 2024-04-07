import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, Alert } from 'react-native';
import tw from 'twrnc'; // Importa la función tw de twrnc
import rodri from "../../../assets/rodri.png";
import OneNotifi from "../../../assets/OneNotifi.png";
import Buscar from "../../../assets/Buscar.png";
import Micro from "../../../assets/Micro.png";
import { axiosClient } from '../../../axiosClient';
import { useAppStore } from '../../stores/appStore';

const HomePatient = () => {
    const [search, setSearch] = React.useState('');
    const [userInfo, setUserInfo] = useState(null);
    const [appointments, setAppointments] = useState([]);
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
    }, []);
    
    
    useEffect(() => {
        const getAppointmentsData = async () => {
            try {
                const patientId = profileData.id;
                const response = await axiosClient.get(`/appointment/patient/${patientId}`)
                console.log(response)
                setAppointments(response.data.response ?? []);
            } catch (err) {
                console.log(err);
                Alert.alert("Oops!", "Hubo un error al obtener información");
            }
        }
        getAppointmentsData()
    }, [])
    
    return (
        <ScrollView style={tw`bg-white pt-8 h-full`}>
            <View style={tw`items-center bg-white`}>
                <View style={tw`flex flex-row items-center bg-white justify-around`}>
                    <View style={tw`flex  items-center`}>
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
                    <Image source={Micro} />
                </View>
            </View>
        </ScrollView>
    )
}

export default HomePatient;
