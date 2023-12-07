import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import NewMedScreen from './NewMedScreen';
import EditMedScreen from './EditMedScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen(props) {
    return (
        <HomeStack.Navigator >
            <HomeStack.Screen name="Medications" component={HomeScreen} />
            <HomeStack.Screen name="New Med" component={NewMedScreen} />
            <HomeStack.Screen name="Edit Med" component={EditMedScreen} />
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;