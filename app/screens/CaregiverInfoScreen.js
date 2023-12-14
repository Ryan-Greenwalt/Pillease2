import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Globals from '../components/Globals';

function CaregiverInfoScreen(props) {
  const handleCaregiverMessage = () => {
    // additional logic can go here if we want to actually submit feedback
    Alert.alert('Reminder Set!', caregiverMessage);
  };

  const [caregiverMessage, setCaregiverMessage] = useState('');
  const [hourToSend, setHourToSend] = useState('');
  const [openHour, setOpenHour] = useState(false);
  const [hours, setHours] = useState([
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
  ]);
  const [minuteToSend, setMinuteToSend] = useState('');
  const [openMinute, setOpenMinute] = useState(false);
  const [minutes, setMinutes] = useState([
    { label: '00', value: '0' },
    { label: '05', value: '5' },
    { label: '10', value: '10' },
    { label: '15', value: '15' },
    { label: '20', value: '20' },
    { label: '25', value: '25' },
    { label: '30', value: '30' },
    { label: '35', value: '35' },
    { label: '40', value: '40' },
    { label: '45', value: '45' },
    { label: '50', value: '50' },
    { label: '55', value: '55' },
  ]);
  const [amPm, setAmPm] = useState('');
  const [openAmPm, setOpenAmPm] = useState(false);
  const [amPmOptions, setAmPmOptions] = useState([
    { label: 'am', value: 'am' },
    { label: 'pm', value: 'pm' },
  ]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.heading}>Schedule a Reminder for Your Patient</Text>

        <TextInput
          style={styles.input}
          multiline
          placeholder="Type your message here!"
          maxLength={300}
          value={caregiverMessage}
          onChangeText={(text) => setCaregiverMessage(text)}
        />

        <View style={styles.row}>
          <View style={styles.column}>
            <DropDownPicker
              open={openHour}
              value={hourToSend}
              items={hours}
              setOpen={setOpenHour}
              setValue={setHourToSend}
              setItems={setHours}
              placeholder={'Hour'}
              containerStyle={{ marginBottom: openHour || openMinute || openAmPm ? 100 : 15 }}
              maxHeight={100}
              style={styles.pickerStyle}
            />
          </View>
          <View style={styles.column}>
            <DropDownPicker
              open={openMinute}
              value={minuteToSend}
              items={minutes}
              setOpen={setOpenMinute}
              setValue={setMinuteToSend}
              setItems={setMinutes}
              placeholder={'Minute'}
              containerStyle={{ marginBottom: openHour || openMinute || openAmPm ? 100 : 15 }}
              maxHeight={100}
              style={styles.pickerStyle}
            />
          </View>
          <View style={styles.column}>
            <DropDownPicker
              open={openAmPm}
              value={amPm}
              items={amPmOptions}
              setOpen={setOpenAmPm}
              setValue={setAmPm}
              setItems={setAmPmOptions}
              placeholder={''}
              containerStyle={{ marginBottom: openHour || openMinute || openAmPm ? 100 : 15 }}
              maxHeight={100}
              style={styles.pickerStyle}
            />
          </View>
        </View>

        <TouchableHighlight
          style={styles.button}
          underlayColor={Globals.buttonLight}
          onPress={handleCaregiverMessage}
        >
          <Text style={styles.buttonText}>Schedule Reminder</Text>
        </TouchableHighlight>
      </View>
    </TouchableWithoutFeedback>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 10
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  column: {
    flex: 1,
    justifyContent: 'center'
  },
  pickerContainer: {
    flex: 1,
    marginRight: 8,
  },
  pickerStyle: {
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: Globals.buttonLight,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CaregiverInfoScreen;
