import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function UserFeedbackScreen(props) {
    return (
        <View style={styles}>
            <Text>User Feedback</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
})

export default UserFeedbackScreen;