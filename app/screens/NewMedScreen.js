import React from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

function NewMedScreen({ navigation }) {
    const [medName, setMedName] = React.useState('');

    const handleConfirm = () => {
        navigation.navigate({
            name: 'Medications',
            params: { medName: medName },
            merge: true
        })
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.medNameInput}
                placeholder="Medication name"
                value={medName}
                onChangeText={setMedName}
            />
            <Button
                title="Confirm"
                onPress={handleConfirm}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    medNameInput: {
        padding: 10,
        backgroundColor: 'white'
    }
})

export default NewMedScreen;