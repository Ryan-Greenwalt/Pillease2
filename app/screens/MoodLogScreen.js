import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Slider from '@react-native-community/slider'
import Globals from '../components/Globals';


function MoodLogScreen(props) {

    const [isActive, setIsActive] = useState(false);
    const [symtpomInput, setFeedback] = useState('');

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
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText} onPress={buttonPress} color={isActive ? "white" : "grey"}>Chills</Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText} onPress={buttonPress} color={isActive ? "white" : "grey"}>Nausea</Text>
                        </View>
                    </View>

                    <View style={styles.buttonsRow}> 
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText} onPress={buttonPress} color={isActive ? "white" : "grey"}>Dizziness</Text>
                        </View>
                            
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText} onPress={buttonPress} color={isActive ? "white" : "grey"}>Lethargy</Text>
                        </View>
                    </View>

                    <View style={styles.buttonsRow}> 
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText} onPress={buttonPress} color={isActive ? "white" : "grey"}>Headache</Text>
                        </View>
                    
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText} onPress={buttonPress} color={isActive ? "white" : "grey"}>Dry Mouth</Text>
                        </View>
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
        maxHeight: 60
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%',
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 45,
        flex: 1
    },
    buttonText: {
        fontSize: 14
    }
});

export default MoodLogScreen;