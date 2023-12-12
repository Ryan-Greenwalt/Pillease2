import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CheckBox from 'expo-checkbox';

function Medication({ medInfo: { medName, dosageAmount, dosageUnit, hourToTake, minuteToTake, amPm, days, medNumber }, onDelete, onEdit }) {
  const [taken, setTaken] = React.useState(false);

  const handleDeleteMed = () => {
    onDelete?.(medNumber);
  };

  const handleEditMed = () => {
    onEdit?.(medName, dosageAmount, dosageUnit, hourToTake, minuteToTake, amPm, days, medNumber);
  };

  const handleCheckBox = () => {
    setTaken(!taken);
  };

  return (
    <View style={styles.container}>
      <View style={styles.medicationInfoContainer}>
        <View style={styles.medNameRow}>
          <Text style={styles.boldText}>{medName}</Text>
          <CheckBox
            value={taken}
            onValueChange={handleCheckBox}
          />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Dosage:</Text>
          <Text>{dosageAmount} {dosageUnit}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Take at:</Text>
          <Text>{hourToTake}:{minuteToTake} {amPm}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Days:</Text>
          <Text>{days.join(', ')}</Text>
        </View>
      </View>
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
    borderRadius: 10,
  },
  boldText: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
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
    alignItems: 'center',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  medicationInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
});

export default Medication;
