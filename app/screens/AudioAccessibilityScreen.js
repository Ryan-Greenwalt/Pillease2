import React,  { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

function AudioAccessibilityScreen(props) {
    const [audioNarration, setAudioNarration] = useState(false);
    const [muteAllSound, setMuteAllSound] = useState(false);

    const toggleSwitch = (setting) => {
        switch (setting) {
          case 'audioNarration':
            setAudioNarration(!audioNarration);
            break;
          case 'muteAllSound':
            setMuteAllSound(!muteAllSound);
            break;
          default:
            break;
        }
      };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Sound Settings</Text>

            <View style={styles.switchContainer}>
                <Text>Audio Narration </Text>
                <Switch value={audioNarration} onValueChange={() => toggleSwitch('audioNarration')} />
            </View>

            <View style={styles.switchContainer}>
                <Text>Mute All Sound </Text>
                <Switch value={muteAllSound} onValueChange={() => toggleSwitch('muteAllSound')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
      heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%', // Adjust the width as needed
        marginBottom: 16,
      },
    });
export default AudioAccessibilityScreen;