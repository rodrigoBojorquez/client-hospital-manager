import { View, FlatList, TextInput, StyleSheet, SafeAreaView, Text, Button } from 'react-native';
import { useEffect, useState } from 'react'
import { axiosClient } from '../../../axiosClient';

// COMPONENTS
import DoctorCard from './components/DoctorCard';

const SearchDoctor = ({ navigation }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
  
    useEffect(() => {
      const getDoctors = async () => {
        try {
          const response = await axiosClient.get("/doctor/");
          setDoctors(response.data.response ?? []);
        } catch (error) {
          console.error("Error fetching doctors:", error);
        }
      };
      getDoctors();
    }, []);
  
    useEffect(() => {
      const filtered = doctors.filter(doctor =>
        doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredDoctors(filtered);
    }, [searchTerm, doctors]);

  return (
    <SafeAreaView style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Buscar por especialidad"
        onChangeText={setSearchTerm}
        value={searchTerm}
      />

      <View>
        <Button 
            title='Mis citas'
            onPress={() => navigation.navigate("Appointments")}
        />
      </View>

      {filteredDoctors.length === 0 ? (
        <View style={styles.emptyMessage}>
          <Text>No se encontraron resultados</Text>
        </View>
      ) : (
        <FlatList
          data={filteredDoctors}
          renderItem={({ item }) => <DoctorCard doctor={item} navigation={navigation} />}
          keyExtractor={doctor => doctor._id}
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#f0f0f0',
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
    },
    emptyMessage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default SearchDoctor