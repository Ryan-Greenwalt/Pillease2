import { StyleSheet, Button, Text, View } from 'react-native';

function HomeScreen({ navigation, route }) {

    const handleNewMed= () => {
        navigation.navigate('New Med')
    }

    return (
        <View style={styles.container}>
            <Text>Medication name: {route.params?.medName}</Text>
            <Button
                title="New Med"
                onPress={handleNewMed}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen;