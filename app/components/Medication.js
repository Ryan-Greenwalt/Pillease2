import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Medication({medInfo: { medName, dosageAmount, hourToTake, minuteToTake, amPm, days, medNumber }, onDelete, onEdit}) {
    handleDeleteMed = () => {
        onDelete?.(medNumber);
    }

    handleEditMed = () => {
        onEdit?.(medName, dosageAmount, hourToTake, minuteToTake, amPm, days, medNumber)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{medName}</Text>
            <Text>Dosage: {dosageAmount}</Text>
            <Text>Take at: {hourToTake}:{minuteToTake} {amPm}</Text>
            <Text>{days.join(', ')}</Text>
            <Button
                title="Edit"
                onPress={handleEditMed}
            />
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
        width: '90%',
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold'
    },
})

export default Medication;