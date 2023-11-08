import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CaregiverInfoScreen(props) {
    return (
        <View style={styles}>
            <Text>Caregiver Info</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
})

export default CaregiverInfoScreen;