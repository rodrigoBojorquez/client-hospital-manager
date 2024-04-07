import { View, Text } from 'react-native'
import React from 'react'

const Appointment = ({ data }) => {
  return (
    <View style={{backgroundColor: "#EEEDEB", padding: 10, borderRadius: 10, marginBottom: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
      <View style={{width: "80%"}}>
        <Text style={{fontSize: 20, fontWeight: 600, marginBottom: 10}}>{data.patient}</Text>
        <Text>{data.description}</Text>
      </View>
      <Text style={{fontSize: 18, fontWeight: 500}}>{data.hour}</Text>
    </View>
  )
}

export default Appointment