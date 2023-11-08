import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

function SettingsScreen({ navigation }) {
    return (
        <View style={styles}>
            <Text>Settings</Text>
            <Button
                title="Visual Accessibility"
                onPress={() => navigation.navigate('Visual Accessibility')}
            />
            <Button
                title="Audio Accessibility"
                onPress={() => navigation.navigate('Audio Accessibility')}
            />
            <Button
                title="ASD Education"
                onPress={() => navigation.navigate('ASD Education')}
            />
            <Button
                title="Caregiver Info"
                onPress={() => navigation.navigate('Caregiver Info')}
            />
            <Button
                title="User Feedback"
                onPress={() => navigation.navigate('User Feedback')}
            />
            <Button
                title="Health Profile"
                onPress={() => navigation.navigate('Health Profile')}
            />
            <Button
                title="Notifications"
                onPress={() => navigation.navigate('Notifications')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
})

export default SettingsScreen;