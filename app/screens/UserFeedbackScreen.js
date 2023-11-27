import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

function UserFeedbackScreen(props) {
    const [feedback, setFeedback] = useState('');

    const handleFeedbackSubmit = () => {
    // additional logic can go here if we want to actually submit feedback
        Alert.alert('Feedback Submitted', feedback);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Have Advice? Let Us Know!</Text>
            
            {/* Feedback Input */}
            <TextInput
                style={styles.input}
                multiline
                placeholder="Type your feedback here..."
                value={feedback}
                onChangeText={text => setFeedback(text)}
            />

            {/* Submit Button */}
            <Button
                title="Submit Feedback"
                onPress={handleFeedbackSubmit}
            />
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 120,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
    },
});

export default UserFeedbackScreen;
