import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function NotificationsScreen(props) {
    return (
        <View style={styles}>
            <Text>Notifications</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
})

export default NotificationsScreen;