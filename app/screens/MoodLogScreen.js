import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MoodLogStackScreen from './MoodLogStackScreen';
import Slider from '@react-native-community/slider'


function MoodLogScreen(props) {
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
                    <Text style={styles.buttonText}>Chills</Text>
            </View>
                

 
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Nausea</Text>
                </View>
                </View>

                <View style={styles.buttonsRow}> 
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Dizziness</Text>
            </View>
                

                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Lethargy</Text>
                </View>
                </View>

                <View style={styles.buttonsRow}> 
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Headache</Text>
            </View>
                

                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Dry Mouth</Text>
                </View>
                </View>

        </View></>
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