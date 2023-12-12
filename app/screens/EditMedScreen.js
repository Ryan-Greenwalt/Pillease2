import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, Alert, Keyboard , TouchableHighlight} from 'react-native';
// npm install react-native-dropdown-picker
import DropDownPicker from 'react-native-dropdown-picker';
import Globals from '../components/Globals';

function EditMedScreen({ navigation, route }) {
    const [medName, setMedName] = React.useState(route.params.medName);
    const [dosageAmount, setDosageAmount] = React.useState(route.params.dosageAmount);
    const [dosageUnit, setDosageUnit] = React.useState(route.params.dosageUnit);
    const [openUnit, setOpenUnit] = React.useState(false);
    const [units, setUnits] = React.useState([
        {label: 'pill(s)', value: 'pill(s)'},
        {label: 'ml', value: 'ml'},
        {label: 'mg', value: 'mg'},
        {label: 'tsp', value: 'tsp'},
        {label: 'tbsp', value: 'tbsp'},
        {label: 'dose', value: 'dose'}
    ]);
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
        if (medName === '' || dosageAmount ==='' || dosageUnit === '' || hourToTake === '' || minuteToTake == '' || amPm === '' || days.length === 0) {
            emptyInputAlert();
        }
        else {
            navigation.navigate({
                name: 'Medications',
                params: { edited: true, medName: medName, dosageAmount: dosageAmount, dosageUnit: dosageUnit, hourToTake: hourToTake, minuteToTake: minuteToTake, amPm: amPm, days: days, medNumber: route.params.medNumber },
                merge: true
            })
        }   
    }

    return (
        <View style={styles.container}>
            <Text style={styles.inputLabel} >Medication Name:</Text>
            <TextInput 
                style={styles.inputField}
                textAlign={'center'}
                maxLength={20}
                value={medName}
                onChangeText={setMedName}
            />

            <Text style={styles.inputLabel} >Dosage Size:</Text>
            <View style={styles.row}>
                <View style={styles.column}>
                    <TextInput 
                        style={styles.inputField}
                        textAlign={'center'}
                        maxLength={10}
                        value={dosageAmount}
                        onChangeText={setDosageAmount}
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.column}>
                    <DropDownPicker
                        containerStyle={{marginBottom: openUnit ? 100 : 15}}
                        open={openUnit}
                        value={dosageUnit}
                        items={units}
                        setOpen={setOpenUnit}
                        setValue={setDosageUnit}
                        setItems={setUnits}
                        placeholder={'Unit'}
                        maxHeight={100}
                        onPress={Keyboard.dismiss}
                    />
                </View>
            </View>

            <Text style={styles.inputLabel} >Time to Take:</Text>
            <View style={styles.row}>
                <View style={styles.column}>
                    <DropDownPicker
                        containerStyle={{marginBottom: openHour || openMinute || openAmPm ? 100 : 15}}
                        open={openHour}
                        value={hourToTake}
                        items={hours}
                        setOpen={setOpenHour}
                        setValue={setHourToTake}
                        setItems={setHours}
                        placeholder={'Hour'}
                        maxHeight={100}
                        onPress={Keyboard.dismiss}
                    />
                </View>
                <View style={styles.column}>
                    <DropDownPicker
                        containerStyle={{marginBottom: openHour || openMinute || openAmPm ? 100 : 15}}
                        open={openMinute}
                        value={minuteToTake}
                        items={minutes}
                        setOpen={setOpenMinute}
                        setValue={setMinuteToTake}
                        setItems={setMinutes}
                        placeholder={'Minute'}
                        maxHeight={100}
                        onPress={Keyboard.dismiss}
                    />
                </View>
                <View style={styles.column}>
                    <DropDownPicker
                        containerStyle={{marginBottom: openHour || openMinute || openAmPm ? 100 : 15}}
                        open={openAmPm}
                        value={amPm}
                        items={amPmOptions}
                        setOpen={setOpenAmPm}
                        setValue={setAmPm}
                        setItems={setAmPmOptions}
                        placeholder={'am/pm'}
                        maxHeight={100}
                        onPress={Keyboard.dismiss}
                    />
                </View>
            </View>

            <Text style={styles.inputLabel} >Days to Take:</Text>
            <DropDownPicker
                containerStyle={{width: '85%', marginBottom: 15}}
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
                mode="BADGE"
                maxHeight={100}
                onPress={Keyboard.dismiss}
            />
 
            <TouchableHighlight style={styles.button} underlayColor="#DDDDDD" onPress={handleConfirm}>
            <Text style={styles.buttonText}>Confirm</Text>
            </TouchableHighlight>
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
        backgroundColor: 'white',
        width: '85%',
        marginBottom: 15,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    inputLabel: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    row: {
        flexDirection: 'row',
        width: '85%'
    },
    column: {
        flex: 1,
        justifyContent: 'center'
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditMedScreen;
