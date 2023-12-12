import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Medication({medInfo: { medName, dosageAmount, dosageUnit, hourToTake, minuteToTake, amPm, days, medNumber }, onDelete, onEdit}) {
  handleDeleteMed = () => {
      onDelete?.(medNumber);
  }

  handleEditMed = () => {
      onEdit?.(medName, dosageAmount, dosageUnit, hourToTake, minuteToTake, amPm, days, medNumber)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{medName}</Text>
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
  title: {
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
});

export default Medication;
