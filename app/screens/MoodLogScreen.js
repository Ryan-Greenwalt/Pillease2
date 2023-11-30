import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import MoodLogStackScreen from './MoodLogStackScreen';
import Slider from '@react-native-community/slider'


function MoodLogScreen(props) {

    const [isActive, setIsActive] = useState(false);
    const [symtpomInput, setFeedback] = useState('');

    const buttonPress = () =>{
        setIsActive(true);
    }

    return (
        <>
        
        <View style={styles.containerTop}>
        <Text style={{fontWeight: 'bold', marginTop: 50}}>How are you feeling today? </Text>
       <Image source={require('../assets/moodfacestogether.png')} style ={styles.moodImg}/> 
        </View>
        
        
        <View style={styles.containerMiddle}>
                    <Slider
            style={{width: 350, height: 40}}
            minimumValue={0}
            maximumValue={4}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            />
        </View>

        <View style={styles.containerBottom}>
        <Text style={{fontWeight: 'bold'}}>Symptoms</Text>
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

                <TextInput
                style={styles.containerText}
                multiline
                placeholder="Anything else?"
                value={symtpomInput}
                onChangeText={text => setFeedback(text)}
            />

        </View>
        

        </>
    );
}

const styles = StyleSheet.create({
    moodImg:{
        width:350,
        height:250,
        resizeMode: "contain"
    },
    containerTop:{
        flex:1,
        alignItems: 'center',
    },
    containerMiddle:{
        flex:2,
        paddingTop: 170,
        paddingLeft: 5
    },
    containerBottom:{
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 8, 
        
    },
    containerText:{
        flex:4,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 120,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '75%'
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 45,
    },
    buttonText: {
        fontSize: 12
    }
});

export default MoodLogScreen;