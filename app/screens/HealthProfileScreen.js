import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function HealthProfileScreen(props) {
    return (
        <View style={styles}>
            <Text>Health Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
})

export default HealthProfileScreen;