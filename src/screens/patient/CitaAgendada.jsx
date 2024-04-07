import React from 'react';
import Agendado from "../../../assets/Agendado.png";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import tw from 'twrnc';

export default function CitaAgendada({ navigation }) {
  return (
    <View style={tw`bg-white h-full flex items-center`}>
      <View>
        <Animatable.Image 
          source={Agendado} 
          style={tw`mt-20 items-center flex justify-center w-64 h-64`} 
        />
        <Text style={tw`font-bold text-4xl text-[#11AEBD] text-center mt-10`}>Agendado</Text>
        <Text style={tw`mt-3 text-center text-lg font-bold`}>Tu cita ha sido agendada</Text>
        <TouchableOpacity 
          style={tw`text-center bg-[#1178BD] text-white text-2xl rounded-2xl font-semibold p-2 mt-20`} 
          onPress={() => navigation.navigate('Appointments')}
        >
          <Text style={tw`text-center bg-[#1178BD] text-white text-2xl  rounded-2xl  font-semibold p-2`}>Regresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
