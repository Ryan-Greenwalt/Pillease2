import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Keyboard, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import Slider from '@react-native-community/slider'
import Globals from '../components/Globals';

function MoodLogScreen(props) {

    const [isActive, setIsActive] = useState(false);
    const [symtpomInput, setFeedback] = useState('');
    const [chillsColor, setChillsColor] = useState(Globals.primaryLight);
    const [chillsTextColor, setChillsTextColor] = useState('black');
    const [nauseaColor, setNauseaColor] = useState(Globals.primaryLight);
    const [nauseaTextColor, setNauseaTextColor] = useState('black');
    const [dizzinessColor, setDizzinessColor] = useState(Globals.primaryLight);
    const [dizzinessTextColor, setDizzinessTextColor] = useState('black');
    const [lethargyColor, setLethargyColor] = useState(Globals.primaryLight);
    const [lethargyTextColor, setLethargyTextColor] = useState('black');
    const [headacheColor, setHeadacheColor] = useState(Globals.primaryLight);
    const [headacheTextColor, setHeadacheTextColor] = useState('black');
    const [dryColor, setDryColor] = useState(Globals.primaryLight);
    const [dryTextColor, setDryTextColor] = useState('black');

    const handleSymptomPress = (symptom) => {
        if (symptom === 'chills') {
            (chillsColor === Globals.primaryLight ? setChillsColor(Globals.buttonLight) : setChillsColor(Globals.primaryLight));
            (chillsTextColor === 'black' ? setChillsTextColor('white') : setChillsTextColor('black'));
        }
        if (symptom === 'nausea') {
            (nauseaColor === Globals.primaryLight ? setNauseaColor(Globals.buttonLight) : setNauseaColor(Globals.primaryLight));
            (nauseaTextColor === 'black' ? setNauseaTextColor('white') : setNauseaTextColor('black'));
        }
        if (symptom === 'dizziness') {
            (dizzinessColor === Globals.primaryLight ? setDizzinessColor(Globals.buttonLight) : setDizzinessColor(Globals.primaryLight));
            (dizzinessTextColor === 'black' ? setDizzinessTextColor('white') : setDizzinessTextColor('black'));
        }
        if (symptom === 'lethargy') {
            (lethargyColor === Globals.primaryLight ? setLethargyColor(Globals.buttonLight) : setLethargyColor(Globals.primaryLight));
            (lethargyTextColor === 'black' ? setLethargyTextColor('white') : setLethargyTextColor('black'));
        }
        if (symptom === 'headache') {
            (headacheColor === Globals.primaryLight ? setHeadacheColor(Globals.buttonLight) : setHeadacheColor(Globals.primaryLight));
            (headacheTextColor === 'black' ? setHeadacheTextColor('white') : setHeadacheTextColor('black'));
        }
        if (symptom === 'dry') {
            (dryColor === Globals.primaryLight ? setDryColor(Globals.buttonLight) : setDryColor(Globals.primaryLight));
            (dryTextColor === 'black' ? setDryTextColor('white') : setDryTextColor('black'));
        }
    }

    const buttonPress = () =>{
        setIsActive(true);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <Text style={{fontWeight: 'bold', marginTop: 50}}>How are you feeling today? </Text>
                    <Image source={require('../assets/moodfacestogether.png')} style ={styles.moodImg}/> 
                </View>
                
                
                <View style={styles.containerMiddle}>
                    <Slider
                        style={{width: 350, height: 40}}
                        minimumValue={0}
                        maximumValue={4}
                        minimumTrackTintColor={Globals.buttonLight}
                        maximumTrackTintColor={Globals.navIconDark}
                    />
                </View>

                <View style={styles.containerBottom}>
                
                    <Text style={{fontWeight: 'bold', marginBottom: 10}}>Symptoms</Text>
                    <TextInput
                        style={styles.containerText}
                        multiline={true}
                        placeholder="Notes"
                        value={symtpomInput}
                        maxLength={200}
                        onChangeText={text => setFeedback(text)}
                    />
                    <View style={styles.buttonsRow}> 
                        <TouchableHighlight 
                            style={[{ backgroundColor: chillsColor}, styles.buttonContainer]} 
                            onPress={() => handleSymptomPress('chills')}
                            underlayColor={Globals.primaryLight}
                        >
                            <Text style={[{color: chillsTextColor}, styles.buttonText]}>Chills</Text>
                        </TouchableHighlight>

                        <TouchableHighlight 
                            style={[{ backgroundColor: nauseaColor}, styles.buttonContainer]} 
                            onPress={() => handleSymptomPress('nausea')}
                            underlayColor={Globals.primaryLight}
                        >
                            <Text style={[{color: nauseaTextColor}, styles.buttonText]}>Nausea</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.buttonsRow}> 
                        <TouchableHighlight 
                            style={[{ backgroundColor: dizzinessColor}, styles.buttonContainer]} 
                            onPress={() => handleSymptomPress('dizziness')}
                            underlayColor={Globals.primaryLight}
                        >
                            <Text style={[{color: dizzinessTextColor}, styles.buttonText]}>Dizziness</Text>
                        </TouchableHighlight>
                            
                        <TouchableHighlight 
                            style={[{ backgroundColor: lethargyColor}, styles.buttonContainer]} 
                            onPress={() => handleSymptomPress('lethargy')}
                            underlayColor={Globals.primaryLight}
                        >
                            <Text style={[{color: lethargyTextColor}, styles.buttonText]}>Lethargy</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.buttonsRow}> 
                        <TouchableHighlight 
                            style={[{ backgroundColor: headacheColor}, styles.buttonContainer]} 
                            onPress={() => handleSymptomPress('headache')}
                            underlayColor={Globals.primaryLight}
                        >
                            <Text style={[{color: headacheTextColor}, styles.buttonText]}>Headache</Text>
                        </TouchableHighlight>
                    
                        <TouchableHighlight 
                            style={[{ backgroundColor: dryColor}, styles.buttonContainer]} 
                            onPress={() => handleSymptomPress('dry')}
                            underlayColor={Globals.primaryLight}
                        >
                            <Text style={[{color: dryTextColor}, styles.buttonText]}>Dry Mouth</Text>
                        </TouchableHighlight>
                    </View>
                    
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    moodImg:{
        width: 350,
        height: 250,
        resizeMode: "contain"
    },
    containerTop:{
        flex: 1,
        alignItems: 'center',
    },
    containerMiddle:{
        flex: 1,
        marginTop: 170,
    },
    containerBottom:{
        flex: 4,
        alignItems: 'center',
    },
    containerText:{
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        maxHeight: 60,
        marginVertical: 10
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 12,
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginHorizontal: 10
    },
    buttonText: {
        fontSize: 15,
    }
});

export default MoodLogScreen;