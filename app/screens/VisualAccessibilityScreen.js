import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function VisualAccessibilityScreen(props) {
    return (
        <View style={styles}>
            <Text>Visual Accessibility</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
})

export default VisualAccessibilityScreen;