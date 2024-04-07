import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import rodri from "../../../assets/rodri.png";
import tw from 'twrnc';

const InfoPersonal = ({ name, onPressRemove, onPressEdit, onPressSave, onChangeName, onChangeSpecialty, onChangeLicense, onChangeContact, aboutMe, onPressChangePhoto, specialty, license, contact, onChangeAboutMe }) => {
    return (
        <ScrollView style={tw`flex-1 p-4 bg-white`}>
            <Text style={tw`text-2xl font-bold mb-4 text-center text-[#11AEBD]`}>Edite sus datos</Text>
            <Text style={tw`text-xl font-bold mb-2 text-[#11AEBD]`}>Foto de Perfil</Text>
            <View style={tw`flex flex-row items-center mb-4`}>
                <TouchableOpacity style={tw`w-24 h-24 rounded-full overflow-hidden mr-2`} onPress={onPressChangePhoto}>
                    <Image source={rodri} style={tw`w-full h-full`} />
                </TouchableOpacity>
                <TouchableOpacity style={tw`bg-[#1178BD] py-2 px-4 rounded-md ml-4 mr-2`} onPress={onPressEdit}>
                    <Text style={tw`text-white font-bold`}>Cambiar foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`bg-[#D9D9D9] py-2 px-4 rounded-md`} onPress={onPressRemove}>
                    <Text style={tw`text-black font-bold`}>Remover</Text>
                </TouchableOpacity>
            </View>
            <Text style={tw`text-xl font-bold mb-2 text-[#11AEBD]`}>Datos personales</Text>
            <Text style={tw`text-sm font-bold mb-1`}>Nombre Completo</Text>
            <TextInput
                style={tw`h-10 shadow-md bg-[#D9D9D9] rounded-md px-4 mb-2`}
                value={name}
                onChangeText={onChangeName}
                placeholder="Introduzca su nombre completo"
            />
            <Text style={tw`text-sm font-bold mb-1`}>Especialidad</Text>
            <TextInput
                style={tw`h-10 shadow-md bg-[#D9D9D9] rounded-md px-4 mb-2`}
                value={specialty}
                onChangeText={onChangeSpecialty}
                placeholder="Introduzca su especialidad médica"
            />
            <Text style={tw`text-sm font-bold mb-1`}>Numero de licencia</Text>
            <TextInput
                style={tw`h-10 shadow-md bg-[#D9D9D9] rounded-md px-4 mb-2`}
                value={license}
                onChangeText={onChangeLicense}
                placeholder="Introduzca su número de licencia médica"
            />
            <Text style={tw`text-sm font-bold mb-1`}>Numero de contacto</Text>
            <TextInput
                style={tw`h-10 shadow-md bg-[#D9D9D9] rounded-md px-4 mb-2`}
                value={contact}
                onChangeText={onChangeContact}
                placeholder="Introduzca su número de contacto"
            />
            <Text style={tw`text-sm font-bold mb-1`}>Acerca de mí:</Text>
            <TextInput
                style={tw`h-20 shadow-md bg-[#D9D9D9] rounded-md px-4 py-2 mb-2`}
                multiline
                value={aboutMe}
                onChangeText={onChangeAboutMe}
                placeholder="Agrega una pequeña descripción sobre ti"
            />
            <TouchableOpacity style={tw`text-center bg-[#1178BD] text-white text-2xl flex justify-center rounded-2xl  font-semibold p-2 mt-2 mb-7`} onPress={onPressSave}>
                <Text style={tw`text-white text-center text-2xl flex justify-center rounded-2xl  font-semibold p-2`}>Guardar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default InfoPersonal;
