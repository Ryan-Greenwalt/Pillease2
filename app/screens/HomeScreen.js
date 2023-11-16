import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import Medication from '../components/Medication';

function HomeScreen({ navigation, route }) {
    const [medications, setMedications] = React.useState([]);

    React.useEffect(() => {
        if(route.params?.medName) {
            setMedications(
                [
                    ...medications,
                    {
                        medName: route.params.medName,
                        dosageAmount: route.params.dosageAmount,
                        timeToTake: route.params.timeToTake,
                        medAmount: route.params.medAmount
                    }
                ]
            );
        }
    }, [route.params?.medName]);

    const handleNewMed= () => {
        navigation.navigate('New Med')
    }

    return (
        <View style={styles.container}>
            {medications.map((medication, index) => (
                <Medication medInfo={medication} medNumber={index + 1} key={index} />
            ))}
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