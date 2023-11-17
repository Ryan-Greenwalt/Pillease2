import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import Medication from '../components/Medication';

function HomeScreen({ navigation, route }) {
    const [medications, setMedications] = React.useState([]);

    React.useEffect(() => {
        if(route.params?.medName) {
            var medNumber = medications.length + 1;
            setMedications(
                [
                    ...medications,
                    {
                        medName: route.params.medName,
                        dosageAmount: route.params.dosageAmount,
                        timeToTake: route.params.timeToTake,
                        medAmount: route.params.medAmount,
                        medNumber: medNumber
                    }
                ]
            );
        }
    }, [route.params?.medName]);

    const handleNewMed = () => {
        navigation.navigate('New Med')
    }

    const handleDeleteMed = (medNumber) => {
        const newMeds = medications.filter((medication) => medication.medNumber !== medNumber);
        setMedications(newMeds);
    }

    return (
        <View style={styles.container}>
            {medications.map((medication, index) => (
                <Medication medInfo={medication} key={index} onDelete={handleDeleteMed} />
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