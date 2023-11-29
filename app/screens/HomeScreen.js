
import React, { useState } from 'react';
import { StyleSheet, Button, Text, View , Image} from 'react-native';
import Medication from '../components/Medication';
import * as ImagePicker from 'expo-image-picker';

function HomeScreen({ navigation, route }) {
    const [medications, setMedications] = React.useState([]);
    const [userName, setUserName] = useState('User');
    const [userPhoto, setUserPhoto] = useState(null);

    React.useEffect(() => {
        if(route.params?.medName) {
            var medNumber = medications.length + 1;
            setMedications(
                [
                    ...medications,
                    {
                        medName: route.params.medName,
                        dosageAmount: route.params.dosageAmount,
                        medAmount: route.params.medAmount,
                        hourToTake: route.params.hourToTake,
                        minuteToTake: route.params.minuteToTake,
                        amPm: route.params.amPm,
                        days: route.params.days,
                        medNumber: medNumber
                    }
                ]
            );
        }
    }, [route.params?.medName]);

    const handleNewMed = () => {
        navigation.navigate('New Med')
    }

    const handleDeleteMed = (medNumber) => {
        const newMeds = medications.filter((medication) => medication.medNumber !== medNumber);
        setMedications(newMeds);
    }

    const handleUploadPhoto = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (status !== 'granted') {
          console.log('Permission to access media library denied');
          return;
        }
    
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.canceled) {
          setUserPhoto(result.uri);
        }
      };


      return (
        <View style={styles.container}>
          {userPhoto && <Image source={{ uri: userPhoto }} style={styles.userPhoto} />}
          {medications.map((medication, index) => (
            <Medication medInfo={medication} key={index} onDelete={handleDeleteMed} />
          ))}
          <Button title="New Med" onPress={handleNewMed} />
          <Button title="Upload Photo" onPress={handleUploadPhoto} />
        </View>
      );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen;
