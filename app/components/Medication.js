import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import MedCheckbox from './MedCheckbox';
import Globals from './Globals';

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
          <View style={styles.checkboxContainer}>
            <MedCheckbox
              checked={taken}
              onChange={handleCheckBox}
              buttonStyle={styles.checkboxStyle}
              activeButtonStyle={styles.checkboxChecked}
            />
          </View>
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
        <TouchableHighlight
          style={styles.editButton}
          underlayColor={Globals.buttonLight}
          onPress={handleEditMed}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.deleteButton}
          underlayColor={Globals.deleteButton}
          onPress={handleDeleteMed}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Globals.primary,
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
    marginBottom: 10,
  },
  editButton: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: Globals.buttonLight,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: Globals.deleteButton,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
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
  checkboxStyle: {
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Globals.buttonLight,
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: Globals.buttonLight,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Medication;
