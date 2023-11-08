import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={styles}>
            <Text>Home Screen</Text>
            <Button
                title="New Med"
                onPress={() => navigation.navigate('New Med')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
})

export default HomeScreen;