import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Medication({medInfo: { medName, dosageAmount, timeToTake, medAmount }, medNumber}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Medication {medNumber}</Text>
            <Text>Medication name: {medName}</Text>
            <Text>Dosage: {dosageAmount}</Text>
            <Text>Take at: {timeToTake}</Text>
            <Text>Pills remaining: {medAmount}</Text>
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