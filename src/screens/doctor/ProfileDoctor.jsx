import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';

const PerfilDoctor = () => {
    return (
        <ScrollView style={{ marginBottom: 5 }}>
            <View className="flex-1 bg-white h-screen flex items-center mt-10 pt-5">
                <View className="w-5/6 flex-row items-center justify-center">
                    <Image source={require('../../assets/Doctor.png')} className="w-32 h-32 mb-5" />
                    <View className="ml-3">
                        <Text className="text-2xl font-bold mb-2">Dr. Juan Perez Ⓒ</Text>
                        <Text className="text-lg font-bold text-[#11AEBD] mb-2">Dentista</Text>
                        <Text className="text-base text-[#11AEBD]">Especialista En Odontologia</Text>
                        <Text className="text-base text-[#11AEBD] mb-5">General Y Endodoncia</Text>
                    </View>
                </View>
                <View className="mb-5">
                    <Text className="text-lg font-bold mb-2">Acerca de</Text>
                    <Text className="text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                    </Text>
                </View>
                <View className="mb-5">
                    <Text className="text-lg font-bold mb-2">Educación</Text>
                    <View className="w-5/6 flex-row items-center justify-center">
                        <Image source={require('../../assets/UADY.jpeg')} className="w-16 h-16 mr-3" />
                        <View>
                            <Text className="text-base">Universidad Autonoma de Yucatan Medico-Especialidad Odontologia</Text>
                            <Text className="text-base">2022-2026</Text>
                        </View>
                    </View>
                </View>
                <View className="mb-5">
                    <Text className="text-lg font-bold mb-2">Consultorio</Text>
                    <View className="w-5/6 flex-row items-center justify-center">
                        <Image source={require('../../assets/UMF.png')} className="w-14 h-14 mr-3" />
                        <View>
                            <Text className="text-base">Unidad Medica Familiar No.16 IMSS.</Text>
                            <Text className="text-base">Av. Nichupte esq Luciernafa 51, 77533 Cancún, Q.R.</Text>
                        </View>
                    </View>
                </View>
                <View className="mb-5">
                    <Text className="text-lg font-bold mb-2">Experiencia</Text>
                    <View className="w-5/6 flex-row items-center justify-center">
                        <Image source={require('../../assets/MediDent.jpg')} className="w-16 h-16 mr-3" />
                        <View>
                            <Text className="text-base">CDental</Text>
                            <Text className="text-base">Medico- Especialidad Endodoncia</Text>
                            <Text className="text-base">2022-2026</Text>
                        </View>
                    </View>               
                     <Text className=" text-center bg-[#1178BD] text-white text-2xl  rounded-2xl  font-semibold mt-4  p-2">Agendar Cita</Text>
                </View>
            </View>                
        </ScrollView>
    );
};

export default PerfilDoctor;