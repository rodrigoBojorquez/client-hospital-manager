import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';
import { useAppStore } from '../../stores/appStore';
import { axiosClient } from "../../../axiosClient";

export default function Perfil({ name }) {
    const [userInfo, setUserInfo] = useState(null);
    const [showInfoPersonal, setShowInfoPersonal] = useState(false);
    const [showContacto, setShowContacto] = useState(false);

    const profileData = useAppStore(state => state.profileData);

    useEffect(() => {
        obtenerInformacionUsuario();
    }, []);

    async function obtenerInformacionUsuario() {
        try {
            const token = profileData.token;

            if (!token) {
                throw new Error('Token de autenticación no encontrado');
            }

            const response = await axiosClient.get('/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log('Información del usuario:', response.data);

            // Actualizar el estado solo si el componente está montado
            if (response.status === 200) {
                setUserInfo(response.data);
            } else {
                throw new Error('Error al obtener información del usuario');
            }
        } catch (error) {
            console.error('Error al obtener información del usuario:', error);
            Alert.alert('Error', 'No se pudo obtener la información del usuario.');
        }
    }

    return (
        <View style={tw`flex-1 bg-white`}>
            {/* Contenedor para la imagen y el texto */}
            <View style={tw`items-center justify-center mt-8 mb-4`}>
                <FontAwesome name="user-circle-o" size={100} color="black" />
                <Text style={tw`text-2xl font-bold mt-4`}>{userInfo ? userInfo.username : 'Nombre de Usuario'}</Text>
            </View>

            {/* Acerca de mí */}
            <View style={tw`mb-8`}>
                <Text style={tw`text-xl font-bold mb-3 bg-[#E9E9E9] px-4 w-full py-1 rounded-md mb-2`}>Acerca de mí</Text>
                <TouchableOpacity onPress={() => setShowInfoPersonal(!showInfoPersonal)}>
                    <View style={tw`flex px-4 flex-row justify-between`}>
                        <Text style={tw`text-lg my-1`}>Información Personal</Text>
                        <MaterialIcons name={showInfoPersonal ? 'expand-less' : 'expand-more'} size={24} color="black" />
                    </View>
                </TouchableOpacity>
                {showInfoPersonal && userInfo && (
                    <View style={tw`flex px-4 flex row justify-between`}>
                    {/* Display user information */}
                    <Text style={tw`text-base text-[#6e6e6e]`}>{userInfo.username}</Text>
                        <Text style={tw`text-base text-[#6e6e6e]`}>{userInfo.email}</Text>
                        {/* Add other user information as needed */}
                    </View>
                )}
                <TouchableOpacity onPress={() => setShowContacto(!showContacto)}>
                    <View style={tw`flex px-4 flex-row justify-between`}>
                        <Text style={tw`text-lg my-1`}>Contacto</Text>
                        <MaterialIcons name={showContacto ? 'expand-less' : 'expand-more'} size={24} color="black" />
                    </View>
                </TouchableOpacity>
                {showContacto && userInfo && (
                    <View style={tw`flex px-4 flex row justify-between`}>
                    {/* Display contact details */}
                        <Text style={tw`text-base text-[#6e6e6e]`}>{userInfo.contact_number}</Text>
                        <Text style={tw`text-base text-[#6e6e6e]`}>{userInfo.address}</Text>
                        {/* Add other contact details as needed */}
                    </View>
                )}
            </View>
        </View>
    );
}
