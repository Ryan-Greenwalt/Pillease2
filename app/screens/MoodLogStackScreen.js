import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoodLogScreen from './MoodLogScreen';

const MoodLogStack = createNativeStackNavigator();

function MoodLogStackScreen(props) {
    return (
        <MoodLogStack.Navigator 
            screenOptions= {{
                contentStyle: {
                    backgroundColor: 'white'
                },
                headerStyle: {
                    backgroundColor: Globals.primary
                }
            }}>
            <MoodLogStack.Screen name="Mood" component={MoodLogScreen} />
        </MoodLogStack.Navigator>
    );
}

export default MoodLogStackScreen;