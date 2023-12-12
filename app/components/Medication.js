import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// npx expo install expo-checkbox
import CheckBox from 'expo-checkbox';

function Medication({medInfo: { medName, dosageAmount, dosageUnit, hourToTake, minuteToTake, amPm, days, medNumber }, onDelete, onEdit}) {
    const [taken, setTaken] = React.useState(false);

    handleDeleteMed = () => {
        onDelete?.(medNumber);
    }

    handleEditMed = () => {
        onEdit?.(medName, dosageAmount, dosageUnit, hourToTake, minuteToTake, amPm, days, medNumber)
    }

    handleCheckBox = () => {
        setTaken(!taken);
    }

    return (
        <View style={styles.container}>
            <View style={styles.medNameRow}>
                <Text style={styles.medName}>{medName}</Text>
                <CheckBox
                    value={taken}
                    onValueChange={handleCheckBox}
                />
            </View>
            <Text>Dosage: {dosageAmount} {dosageUnit}</Text>
            <Text>Take at: {hourToTake}:{minuteToTake} {amPm}</Text>
            <Text>{days.join(', ')}</Text>
            <View style={styles.buttonContainer}>
            <Button
                title="Edit"
                onPress={handleEditMed}
                style={styles.button}
            />
            <Button
                title="Delete"
                onPress={handleDeleteMed}
                style={styles.button}
            />
            </View>
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
    marginBottom: 10,
  },
  medName: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    width: '75%', 
  },
  button: {
    marginHorizontal: 5, 
  },
  medNameRow: {
    flexDirection: 'row',
  }
});

export default Medication;
