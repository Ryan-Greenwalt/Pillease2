import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function HealthProfileScreen(props) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/WIP.png')} style={styles.image} />
      <Text style={styles.message}>Under construction, come back soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain', 
  },
  message: {
    marginTop: 20, 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HealthProfileScreen;
