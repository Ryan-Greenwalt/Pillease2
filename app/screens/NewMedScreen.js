import React from 'react';
import { StyleSheet, Button, View, Text, TextInput } from 'react-native';
import { scheduleNotification } from '../components/NotificationButton';
import DropDownPicker from 'react-native-dropdown-picker';

function NewMedScreen({ navigation }) {
    const [medName, setMedName] = React.useState('');
    const [dosageAmount, setDosageAmount] = React.useState('');
    const [medAmount, setMedAmount] = React.useState('');
    const [hourToTake, setHourToTake] = React.useState('');
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
    const [minuteToTake, setMinuteToTake] = React.useState('');
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

    const handleConfirm = () => {
        navigation.navigate({
            name: 'Medications',
            params: { medName: medName, dosageAmount: dosageAmount, medAmount: medAmount, hourToTake: hourToTake, minuteToTake: minuteToTake, amPm: amPm },
            merge: true
        })
        scheduleNotification();
    }

    return (
        <View style={styles.container}>

            <View style={styles.row}>
                <View style={styles.column}>
                    <Text>Medication Name:</Text>
                </View>
                <View style={styles.column}>
                    <TextInput 
                        style={styles.medNameInput}
                        value={medName}
                        onChangeText={setMedName}
                    />
                </View>
            </View>
            
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text>Dosage Amount:</Text>
                </View>
                <View style={styles.column}>
                    <TextInput 
                        style={styles.dosageAmountInput}
                        value={dosageAmount}
                        onChangeText={setDosageAmount}
                    />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.column}>
                    <Text>Medication Left:</Text>
                </View>
                <View style={styles.column}>
                    <TextInput 
                        style={styles.medAmountInput}
                        value={medAmount}
                        onChangeText={setMedAmount}
                    />
                </View>
            </View>
            

            <View style={styles.row}>
                <View style={styles.column}>
                    <Text>Time to Take:</Text>
                </View>
                <View style={styles.column}>
                    <DropDownPicker
                        open={openHour}
                        value={hourToTake}
                        items={hours}
                        setOpen={setOpenHour}
                        setValue={setHourToTake}
                        setItems={setHours}
                        placeholder={'Hour'}
                    />
                </View>
                <View style={styles.column}>
                    <DropDownPicker
                        open={openMinute}
                        value={minuteToTake}
                        items={minutes}
                        setOpen={setOpenMinute}
                        setValue={setMinuteToTake}
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
                title="Confirm"
                onPress={handleConfirm}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    medNameInput: {
        padding: 10,
        backgroundColor: 'white'
    },
    dosageAmountInput: {
        padding: 10,
        backgroundColor: 'white'
    },
    timeInput: {
        padding: 10,
        backgroundColor: 'white'
    },
    medAmountInput: {
        padding: 10,
        backgroundColor: 'white'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    column: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default NewMedScreen;
