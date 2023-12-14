import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Alert} from 'react-native';
import Globals from '../components/Globals';

//<Image source={require('../assets/WIP.png')} style={styles.image} /> If anyone would like to throw this back in

function HealthProfileScreen({ navigation }) {

  const handleConfirm = () => {
    Alert.alert('Profile Set!', message);

    //Attempts to send name to homescreen start here:
    /*
    navigation.navigate({
      name: 'userName',
      params: { userName : userName },
      merge: true
    })
    */
  };

  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [primaryConcerns, setPrimaryConcerns] = useState('');
  const [comments, setComments] = useState('');
  return (
    
    <View style={styles.container}>
      <Text style={styles.heading}>Build a unique Health Profile:</Text>

      <TextInput
          style={styles.inputField}
          textAlign={'center'}
          placeholder="Name"
          value={userName}
          onChangeText={setUserName}
        />

      <TextInput
          style={styles.inputField}
          textAlign={'center'}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
        />

      <TextInput
          style={styles.inputField}
          textAlign={'center'}
          placeholder="Primary health concerns"
          value={primaryConcerns}
          onChangeText={setPrimaryConcerns}
        />

      <TextInput
          style={styles.inputField}
          textAlign={'center'}
          placeholder="Other comments/concerns"
          value={comments}
          onChangeText={setComments}
        />

        <TouchableHighlight style={styles.button} underlayColor="#DDDDDD" onPress={handleConfirm}>
          <Text style={styles.buttonText}>Confirm Changes</Text>
        </TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain', 
  },
  message: {
    marginTop: 20, 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputField: {
    padding: 10,
    backgroundColor: 'white',
    width: '85%',
    marginBottom: 15,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  button: {
    backgroundColor: Globals.buttonLight,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 15,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default HealthProfileScreen;
