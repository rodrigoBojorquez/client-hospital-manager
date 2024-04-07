import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import rodri from "../../../assets/rodri.png";
import Mas from "../../../assets/Mas.png";
import Logout from '../../../assets/Logout.png';
import tw from 'twrnc'; // Importa la función tw de twrnc

const PerfilUsuarioScreen = ({ name }) => {
    const navigation = useNavigation();

    return (
        <View style={tw`flex-1 p-5 bg-white`}>
            <TouchableOpacity onPress={() => navigation.navigate('InfoPersonal')} style={tw`flex-row items-center justify-end`}>
                <Image source={Logout} style={tw`w-8 h-8`} />
            </TouchableOpacity>

            {/* Contenedor para la imagen y el texto */}
            <View style={tw`flex flex-col items-center justify-center mb-6`}>
                <Image source={rodri} style={tw`w-36 h-36 mb-6`} />
                <Text style={tw`text-2xl font-bold`}>Rodrigo Bojorquez {name}</Text>
            </View>

            {/* Acerca de mi */}
            <View style={tw`mb-8`}>
                <Text style={tw`text-xl font-bold mb-3 bg-[#E9E9E9] px-4 py-1 rounded-md mb-2`}>Acerca de mí</Text>
                <TouchableOpacity onPress={() => navigation.navigate('InfoPersonal')}>
                    <View style={tw`flex flex-row justify-between`}>
                        <Text style={tw`text-lg my-1`}>Información Personal</Text>
                        <Image source={Mas} />
                    </View>
                </TouchableOpacity>
                <View style={tw`flex flex-row justify-between`}>
                    <Text style={tw`text-lg my-1`}>Contacto</Text>
                    <Image source={Mas} />
                </View>
                <View style={tw`flex flex-row justify-between`}>
                    <Text style={tw`text-lg my-1`}>Seguro Médico</Text>
                    <Image source={Mas} />
                </View>
                <View style={tw`flex flex-row justify-between`}>
                    <Text style={tw`text-lg my-1`}>Historial Médico</Text>
                    <Image source={Mas} />
                </View>
                <View style={tw`flex flex-row justify-between`}>
                    <Text style={tw`text-lg my-1`}>Historial de Citas</Text>
                    <Image source={Mas} />
                </View>
            </View>
        </View>
    );
};

export default PerfilUsuarioScreen;
