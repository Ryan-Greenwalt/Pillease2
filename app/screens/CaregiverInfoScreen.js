import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function CaregiverInfoScreen(props) {
    const handleCaregiverMessage = () => {
        // additional logic can go here if we want to actually submit feedback
            Alert.alert('Message/Reminder Set!', caregiverMessage);
        };
    const [patientName, setPatientName] = useState(''); //Patients name for caretaker, not used yet
    const [caregiverMessage, setCaregiverMessage] = useState('');
    const [hourToSend, setHourToSend] = React.useState('');
    const [openHour, setOpenHour] = React.useState(false);
    const [hours, setHours] = React.useState([
        {label: '1', value: '1'},
        {label: '2', value: '2'},
        {label: '3', value: '3'},
        {label: '4', value: '4'},
        {label: '5', value: '5'},
        {label: '6', value: '6'},
        {label: '7', value: '7'},
        {label: '8', value: '8'},
        {label: '9', value: '9'},
        {label: '10', value: '10'},
        {label: '11', value: '11'},
        {label: '12', value: '12'},
    ]);
    const [minuteToSend, setMinuteToSend] = React.useState('');
    const [openMinute, setOpenMinute] = React.useState(false);
    const [minutes, setMinutes] = React.useState([
        {label: '00', value: '0'},
        {label: '05', value: '5'},
        {label: '10', value: '10'},
        {label: '15', value: '15'},
        {label: '20', value: '20'},
        {label: '25', value: '25'},
        {label: '30', value: '30'},
        {label: '35', value: '35'},
        {label: '40', value: '40'},
        {label: '45', value: '45'},
        {label: '50', value: '50'},
        {label: '55', value: '55'},
    ]);
    const [amPm, setAmPm] = React.useState('');
    const [openAmPm, setOpenAmPm] = React.useState(false);
    const [amPmOptions, setAmPmOptions] = React.useState([
        {label: 'am', value: 'am'},
        {label: 'pm', value: 'pm'},
    ]);

    return (
        <View style={styles}>
            <Text style={styles.heading}>Send a message or reminder to !</Text>

            <TextInput
                style={styles.input}
                multiline
                placeholder="Type your message here!"
                value={caregiverMessage}
                onChangeText={text => setCaregiverMessage(text)}
            />

<View style={styles.row}>
                <View style={styles.column}>
                    <Text>Send Message at:</Text>
                </View>
                <View style={styles.column}>
                    <DropDownPicker
                        open={openHour}
                        value={hourToSend}
                        items={hours}
                        setOpen={setOpenHour}
                        setValue={setHourToSend}
                        setItems={setHours}
                        placeholder={'Hour'}
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
                    />
                </View>
            </View>

            <Button
                title="Send Message"
                onPress={handleCaregiverMessage}
            />
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
        height: 100,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 8,
    },
    column: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default CaregiverInfoScreen;