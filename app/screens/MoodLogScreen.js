import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function MoodLogScreen(props) {
    return (
        <View style={styles}>
            <Text>Mood Log</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
})

export default MoodLogScreen;