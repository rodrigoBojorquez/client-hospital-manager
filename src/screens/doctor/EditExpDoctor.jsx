import React from 'react'
import { View, ScrollView, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper'

export default function EditarExp() {

    return (
        <ScrollView style={{ marginBottom: 5 }}>
            <View className="flex-1 p-5 bg-white">
                <Text className="text-2xl text-[#11AEBD] text-center mt-6 font-bold">
                    Edite sus datos
                </Text>
                <Text className="text-2xl text-[#11AEBD] text-left mt-3 font-bold">
                    Experiencia
                </Text>
                <Text className="text-xl text-[#11AEBD] text-left mt-3 font-bold">
                    Datos de la institucion medica
                </Text>
                <View>
                    <View className='mt-2' >
                        <Text className="text-xl  text-left mt-3 font-bold">
                            Nombre de la institucion
                        </Text>
                        <TextInput
                            className='w-full h-12 rounded-md bg-[#D9D9D9] border-none  shadow-lg'
                            style={{ underlineColorAndroid: 'transparent' }}
                            placeholder='Nombre de la institución'
                        />
                    </View>
                    <View className='mt-2' >
                        <Text className="text-xl  text-left mt-3 mb-1 font-bold">
                            Especialidad
                        </Text>
                        <TextInput
                            className='w-full h-12 rounded-md bg-[#D9D9D9] border-none  shadow-lg'
                            style={{ underlineColorAndroid: 'transparent' }}
                            placeholder='Nombre de su especialidad'
                        />
                    </View>
                    <View className='mt-2' >
                        <Text className="text-xl  text-left mt-3 mb-1 font-bold">
                            Trabajo realizado
                        </Text>
                        <TextInput
                            className='w-full h-16 rounded-md bg-[#D9D9D9] border-none  shadow-lg'
                            style={{ underlineColorAndroid: 'transparent' }}
                            placeholder='Introduzca una pequeña descripcion del trabajo
                        que desempeño'
                        />
                    </View>
                    <View className='mt-2' >
                        <Text className="text-xl  text-left mt-3 mb-1 font-bold">
                            Fecha de inicio
                        </Text>
                        <TextInput
                            className='w-full h-12 rounded-md bg-[#D9D9D9] border-none  shadow-lg'
                            style={{ underlineColorAndroid: 'transparent' }}
                            placeholder='Fecha de inicio'
                        />
                    </View>
                    <View className='mt-2' >
                        <Text className="text-xl  text-left mt-3 mb-1 font-bold">
                            Fecha de finalizacion
                        </Text>
                        <TextInput
                            className='w-full h-12 rounded-md bg-[#D9D9D9] border-none  shadow-lg'
                            style={{ underlineColorAndroid: 'transparent' }}
                            placeholder='Fecha de finalizacion'
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                </View>
                <View className="flex justify-end mt-4">
                    <Button className='w-full bg-[#1178BD]  h-12'>
                        <Text className="text-xl text-white  font-bold">
                            Guardar
                        </Text>
                    </Button>
                </View>
            </View>
        </ScrollView>
    )
}