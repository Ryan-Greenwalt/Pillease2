// Dependencies to install for Welcome Message + Pic Upload:
// expo install expo-image-picker
// npm install react-native-vector-images

import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from 'react-native';
import Medication from '../components/Medication';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen({ navigation, route }) {
  const [medications, setMedications] = useState([]);
  const [userName, setUserName] = useState('User');
  const [userPhoto, setUserPhoto] = useState(null);

  // When the user creates a new medication, add its values to the medications array
  React.useEffect(() => {
    if(route.params?.medName && !route.params?.edited) {
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

  // When the user edits a medication, update it in the medications array
  React.useEffect(() => {
    if (route.params?.edited) {
      const editedMeds = medications.map(medication => {
        if (medication.medNumber === route.params.medNumber) {
          return {
            medName: route.params.medName,
            dosageAmount: route.params.dosageAmount,
            medAmount: route.params.medAmount,
            hourToTake: route.params.hourToTake,
            minuteToTake: route.params.minuteToTake,
            amPm: route.params.amPm,
            days: route.params.days,
            medNumber: route.params.medNumber
          }
        }
        else {
          return medication;
        }
      });

      setMedications(editedMeds);
    }
  }, [route.params?.edited]);

  const handleNewMed = () => {
    navigation.navigate('New Med');
  };

  const handleDeleteMed = (medNumber) => {
    const newMeds = medications.filter((medication) => medication.medNumber !== medNumber);
    setMedications(newMeds);
  };

  const handleEditMed = (medName, dosageAmount, medAmount, hourToTake, minuteToTake, amPm, days, medNumber) => {
    navigation.navigate({
      name: 'Edit Med',
      params: { medName: medName, dosageAmount: dosageAmount, medAmount: medAmount, hourToTake: hourToTake, minuteToTake: minuteToTake, amPm: amPm, days: days, medNumber: medNumber },
      merge: true
    })
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

    if (!result.cancelled) {
      setUserPhoto(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.userContentContainer}>
        <View style={styles.userContainer}>
          <TouchableOpacity onPress={handleUploadPhoto}>
            <View>
              {userPhoto && <Image source={{ uri: userPhoto }} style={styles.userPhoto} />}
              {!userPhoto && (
                <View style={styles.uploadIconContainer}>
                  <Ionicons name="camera-outline" size={24} color="white" />
                </View>
              )}
            </View>
          </TouchableOpacity>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeMessage}>Welcome, {userName}!</Text>
          </View>
        </View>
      </View>
      {medications.map((medication, index) => (
        <Medication medInfo={medication} key={index} onDelete={handleDeleteMed} onEdit={handleEditMed} />
      ))}
      <Button title="New Med" onPress={handleNewMed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  userContentContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  userPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  welcomeMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  uploadIconContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
    borderRadius: 20,
  },
});



export default HomeScreen;
