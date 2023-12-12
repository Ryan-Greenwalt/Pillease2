// Dependencies to install for Welcome Message + Pic Upload:
// expo install expo-image-picker
// npm install react-native-vector-images

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import Medication from '../components/Medication';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import Globals from '../components/Globals';

function HomeScreen({ navigation, route }) {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  const [medications, setMedications] = useState([]);
  const [userName, setUserName] = useState('User');
  const [userPhoto, setUserPhoto] = useState(null);
  const [currMedId, setCurrMedId] = useState(1);

  // When the user creates a new medication, add its values to the medications array
  React.useEffect(() => {
    if (route.params?.medName && !route.params?.edited) {
      var medNumber = currMedId;
      setCurrMedId(currMedId + 1);
      var days = route.params.days;
      var sortedDays = days.sort(function(a, b) {
        return daysOfWeek.indexOf(a) - daysOfWeek.indexOf(b);
      });
      setMedications([
        ...medications,
        {
          medName: route.params.medName,
          dosageAmount: route.params.dosageAmount,
          dosageUnit: route.params.dosageUnit,
          hourToTake: route.params.hourToTake,
          minuteToTake: route.params.minuteToTake,
          amPm: route.params.amPm,
          days: sortedDays,
          medNumber: medNumber,
        },
      ]);
    }
  }, [route.params?.medName]);

  // When the user edits a medication, update it in the medications array
  React.useEffect(() => {
    if (route.params?.edited) {
      var days = route.params.days;
      var sortedDays = days.sort(function(a, b) {
        return daysOfWeek.indexOf(a) - daysOfWeek.indexOf(b);
      });
      const editedMeds = medications.map((medication) => {
        if (medication.medNumber === route.params.medNumber) {
          return {
            medName: route.params.medName,
            dosageAmount: route.params.dosageAmount,
            dosageUnit: route.params.dosageUnit,
            hourToTake: route.params.hourToTake,
            minuteToTake: route.params.minuteToTake,
            amPm: route.params.amPm,
            days: sortedDays,
            medNumber: route.params.medNumber,
          };
        } else {
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

  const handleEditMed = (medName, dosageAmount, dosageUnit, hourToTake, minuteToTake, amPm, days, medNumber) => {
    navigation.navigate({
      name: 'Edit Med',
      params: {
        medName: medName,
        dosageAmount: dosageAmount,
        dosageUnit: dosageUnit,
        hourToTake: hourToTake,
        minuteToTake: minuteToTake,
        amPm: amPm,
        days: days,
        medNumber: medNumber,
      },
      merge: true,
    });
  };

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
    // Handles keyboard taps outside of screen to remove it
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.userContentContainer}>
        <TouchableOpacity onPress={handleUploadPhoto}>
          <View style={styles.userContainer}>
            <View>
              {userPhoto && <Image source={{ uri: userPhoto }} style={styles.userPhoto} />}
              {!userPhoto && (
                <View style={styles.uploadIconContainer}>
                  {/* icon for user image upload container */}
                  <Ionicons name="camera-outline" size={24} color="white" />
                </View>
              )}
            </View>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeMessage}>Welcome, {userName}!</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Medications Container */}
      <ScrollView style={styles.medicationsContainer} showsVerticalScrollIndicator={false}>
        {/* Since you can't apply styles to a Scrollview, we have to make a View in the Scrollview */}
        <View style={styles.centeredMedicationsContainer}>
          {medications.map((medication, index) => (
            <Medication medInfo={medication} key={index} onDelete={handleDeleteMed} onEdit={handleEditMed} />
          ))}
        </View>
      </ScrollView>

      {/* Centered and rounded "New Med" button */}
      <TouchableHighlight style={styles.newMedButton} underlayColor="#DDDDDD" onPress={handleNewMed}>
        <Text style={styles.newMedButtonText}>New Med</Text>
      </TouchableHighlight>
    </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft: 10,
  },
  uploadIconContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
    borderRadius: 20,
    marginLeft: 10,
  },
  medicationsContainer: {
    flexGrow: 1,
    marginBottom: 10,
  },
  centeredMedicationsContainer: {
    alignItems: 'center',
  },
  newMedButton: {
    backgroundColor: Globals.buttonLight,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 15,
  },
  newMedButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
