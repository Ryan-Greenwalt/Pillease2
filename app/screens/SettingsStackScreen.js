import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from './SettingsScreen';
import VisualAccessibilityScreen from './VisualAccessibilityScreen';
import AudioAccessibilityScreen from './AudioAccessibilityScreen';
import ASDEducationScreen from './ASDEducationScreen';
import CaregiverInfoScreen from './CaregiverInfoScreen';
import UserFeedbackScreen from './UserFeedbackScreen';
import HealthProfileScreen from './HealthProfileScreen';
import NotificationsScreen from './NotificationsScreen';

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen(props) {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Options" component={SettingsScreen} />
            <SettingsStack.Screen name="Visual Accessibility" component={VisualAccessibilityScreen} />
            <SettingsStack.Screen name="Audio Accessibility" component={AudioAccessibilityScreen} />
            <SettingsStack.Screen name="ASD Education" component={ASDEducationScreen} />
            <SettingsStack.Screen name="Caregiver Info" component={CaregiverInfoScreen} />
            <SettingsStack.Screen name="User Feedback" component={UserFeedbackScreen} />
            <SettingsStack.Screen name="Health Profile" component={HealthProfileScreen} />
            <SettingsStack.Screen name="Notifications" component={NotificationsScreen} />
        </SettingsStack.Navigator>
    );
}

export default SettingsStackScreen;