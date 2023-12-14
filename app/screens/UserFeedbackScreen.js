import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import Globals from '../components/Globals';

function UserFeedbackScreen(props) {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = () => {
    // Implement your logic to handle user feedback here
    Alert.alert('Feedback Submitted', feedback);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Have Advice? Let Us Know!</Text>

      {/* Feedback Input */}
      <TextInput
        style={styles.input}
        multiline
        placeholder="Type your feedback here..."
        value={feedback}
        onChangeText={(text) => setFeedback(text)}
      />

      {/* Submit Button */}
      <TouchableHighlight
        style={styles.button}
        underlayColor="#DDDDDD"
        onPress={handleFeedbackSubmit}
      >
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 120,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  button: {
    backgroundColor: Globals.buttonLight, 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserFeedbackScreen;
