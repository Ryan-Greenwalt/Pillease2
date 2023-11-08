import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

function NewMedScreen({ navigation }) {
    return (
        <View style={styles}>
            <Text>New Med Screen</Text>
            <Button
                title="Back To Home"
                onPress={() => navigation.navigate('Medications')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
})

export default NewMedScreen;