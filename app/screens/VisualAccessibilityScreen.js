import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

// initialize state variables and set it to false (not initialized at first)
function VisualAccessibilityScreen(props) {
  const [deuteranopes, setDeuteranopes] = useState(false);
  const [protanopes, setProtanopes] = useState(false);
  const [protanomalous, setProtanomalous] = useState(false);
  const [deuteranomalous, setDeuteranomalous] = useState(false);
  const [lowVision, setLowVision] = useState(false);

  // toggleSwitch taking in setting parameter and uses switch statement to determine which setting to use
  // toggles corresponding setting using "set" function from "useState"
  const toggleSwitch = (setting) => {
    switch (setting) {
      case 'deuteranopes':
        setDeuteranopes(!deuteranopes);
        break;
      case 'protanopes':
        setProtanopes(!protanopes);
        break;
      case 'protanomalous':
        setProtanomalous(!protanomalous);
        break;
      case 'deuteranomalous':
        setDeuteranomalous(!deuteranomalous);
        break;
      case 'lowVision':
        setLowVision(!lowVision);
        break;
      default:
        break;
    }
  };

  // Retrieves the color mode to apply the appropriate color theme
  const getColorMode = () => {
    if (deuteranopes) {
      return styles.deuteranopesContainer;
    }
    else if (protanopes) {
      return styles.protanopesContainer;
    }
    else if (protanomalous) {
      return styles.protanomalousContainer;
    }
    else if (deuteranomalous) {
      return styles.deuteranomalousContainer;
    }
    else if (lowVision) {
      return styles.lowVisionContainer;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Color Themes</Text>

      <View style={styles.switchContainer}>
        <Text>Deuteranopes </Text>
        <Switch value={deuteranopes} onValueChange={() => toggleSwitch('deuteranopes')} />
      </View>

      <View style={styles.switchContainer}>
        <Text>Protanopes </Text>
        <Switch value={protanopes} onValueChange={() => toggleSwitch('protanopes')} />
      </View>

      <View style={styles.switchContainer}>
        <Text>Protanomalous </Text>
        <Switch value={protanomalous} onValueChange={() => toggleSwitch('protanomalous')} />
      </View>

      <View style={styles.switchContainer}>
        <Text>Deuteranomalous </Text>
        <Switch value={deuteranomalous} onValueChange={() => toggleSwitch('deuteranomalous')} />
      </View>

      <View style={styles.switchContainer}>
        <Text>Low Vision </Text>
        <Switch value={lowVision} onValueChange={() => toggleSwitch('lowVision')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%', // Adjust the width as needed
    marginBottom: 16,
  },
});

export default VisualAccessibilityScreen;
