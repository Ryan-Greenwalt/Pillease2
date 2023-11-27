import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Medication({medInfo: { medName, dosageAmount, medAmount, hourToTake, minuteToTake, amPm, medNumber }, onDelete}) {
    handleDeleteMed = () => {
        onDelete?.(medNumber);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Medication name: {medName}</Text>
            <Text>Dosage: {dosageAmount}</Text>
            <Text>Pills remaining: {medAmount}</Text>
            <Text>Take at: {hourToTake}:{minuteToTake} {amPm}</Text>
            <Button
                title="Delete"
                onPress={handleDeleteMed}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        width: '80%',
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold'
    },
})

export default Medication;