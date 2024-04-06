import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const DoctorCard = ({ doctor, navigation }) => {


    const handlePress = () => {
        navigation.navigate("DoctorInfo", {doctorId: doctor._id})
    };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text style={styles.title}>{doctor.username ?? ""}</Text>
      <Text style={styles.subtitle}>{doctor.speciality ?? ""}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
      elevation: 5,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    subtitle: {
      fontSize: 16,
    },
  });

export default DoctorCard