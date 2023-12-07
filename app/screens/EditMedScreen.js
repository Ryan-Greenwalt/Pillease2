import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, Alert } from 'react-native';
// npm install react-native-dropdown-picker
import DropDownPicker from 'react-native-dropdown-picker';

function EditMedScreen({ navigation, route }) {
    const [medName, setMedName] = React.useState(route.params.medName);
    const [dosageAmount, setDosageAmount] = React.useState(route.params.dosageAmount);
    const [medAmount, setMedAmount] = React.useState(route.params.medAmount);
    const [hourToTake, setHourToTake] = React.useState(route.params.hourToTake);
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
    const [minuteToTake, setMinuteToTake] = React.useState(route.params.minuteToTake);
    const [openMinute, setOpenMinute] = React.useState(false);
    const [minutes, setMinutes] = React.useState([
        {label: '00', value: '00'},
        {label: '05', value: '05'},
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
    const [amPm, setAmPm] = React.useState(route.params.amPm);
    const [openAmPm, setOpenAmPm] = React.useState(false);
    const [amPmOptions, setAmPmOptions] = React.useState([
        {label: 'am', value: 'am'},
        {label: 'pm', value: 'pm'},
    ]);
    const [days, setDays] = React.useState(route.params.days);
    const [openDays, setOpenDays] = React.useState(false);
    const [daysOptions, setDaysOptions] = React.useState([
        {label: 'Sun', value: 'Sun'},
        {label: 'Mon', value: 'Mon'},
        {label: 'Tues', value: 'Tues'},
        {label: 'Wed', value: 'Wed'},
        {label: 'Thurs', value: 'Thurs'},
        {label: 'Fri', value: 'Fri'},
        {label: 'Sat', value: 'Sat'}        
    ])

    const emptyInputAlert = () => {
        Alert.alert('Empty Input Field', 'All input fields are required', [
            {
                text: 'OK'
            }
        ]);
    }

    const handleConfirm = () => {
        if (medName === '' || dosageAmount ==='' || medAmount === '' || hourToTake === '' || minuteToTake == '' || amPm === '' || days.length === 0) {
            emptyInputAlert();
        }
        else {
            navigation.navigate({
                name: 'Medications',
                params: { edited: true, medName: medName, dosageAmount: dosageAmount, medAmount: medAmount, hourToTake: hourToTake, minuteToTake: minuteToTake, amPm: amPm, days: days, medNumber: route.params.medNumber },
                merge: true
            })
        }   
    }

    return (
        <View style={styles.container}>

            <View style={styles.row}>
                <View style={styles.column}>
                    <Text>Medication Name:</Text>
                </View>
                <View style={styles.column}>
                    <TextInput 
                        style={styles.inputField}
                        maxLength={20}
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
                        style={styles.inputField}
                        maxLength={20}
                        value={dosageAmount}
                        onChangeText={setDosageAmount}
                    />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.column}>
                    <Text>Medication Supply:</Text>
                </View>
                <View style={styles.column}>
                    <TextInput 
                        style={styles.inputField}
                        maxLength={20}
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

            <View style={styles.row}>
                <View style={styles.column}>
                    <Text>Days to Take:</Text>
                </View>
                <View style={styles.column}>
                    <DropDownPicker
                        multiple={true}
                        min={0}
                        max={7}
                        open={openDays}
                        value={days}
                        items={daysOptions}
                        setOpen={setOpenDays}
                        setValue={setDays}
                        setItems={setDaysOptions}
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
    inputField: {
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

export default EditMedScreen;