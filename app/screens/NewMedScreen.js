import React from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';
import { scheduleNotification } from '../components/NotificationButton';

function NewMedScreen({ navigation }) {
    const [medName, setMedName] = React.useState('');
    const [dosageAmount, setDosageAmount] = React.useState('');
    const [timeToTake, setTimeToTake] = React.useState('');
    const [medAmount, setMedAmount] = React.useState('');


    const handleConfirm = () => {
        navigation.navigate({
            name: 'Medications',
            params: { medName: medName, dosageAmount: dosageAmount, timeToTake: timeToTake, medAmount: medAmount },
            merge: true
        })
        scheduleNotification();
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.medNameInput}
                placeholder="Medication Name"
                value={medName}
                onChangeText={setMedName}
            />
            <TextInput 
                style={styles.dosageAmountInput}
                placeholder="Dosage Amount"
                value={dosageAmount}
                onChangeText={setDosageAmount}
            />
            <TextInput 
                style={styles.timeInput}
                placeholder="Time to Take"
                value={timeToTake}
                onChangeText={setTimeToTake}
            />
            <TextInput 
                style={styles.medAmountInput}
                placeholder="Medication Left"
                value={medAmount}
                onChangeText={setMedAmount}
            />
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
    }
})

export default NewMedScreen;
