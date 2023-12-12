// Utilizing Expo Go's libraries to implement local notifications
// If this doesn't run, make sure you use the following commands:
// npm install -g expo-cli (this allows us to use "expo" in commands)
// expo install expo-device
// expo install expo-constants
// expo install expo-notifications
// If things are still giving you trouble, you might need to build with EAS. I will include the eas.JSON in my push, but not sure if it will
// configure with just that. So here are the commands to get setup with EAS:
// npm install -g eas-cli
// eas login (this is your Expo Go Account)
// eas whoami (checks that you are indeed logged in)
// eas build (when you do this, it will ask for your login stuff) (doesn't matter if you don't have an Apple Dev account)
// Now the project will show up as an Android project in the Expo Go Dev Tools

import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './app/screens/HomeStackScreen';
import SettingsStackScreen from './app/screens/SettingsStackScreen';
import MoodLogStackScreen from './app/screens/MoodLogStackScreen';
export { schedulePushNotification, registerForPushNotificationsAsync };
import Globals from './app/components/Globals';
import { Ionicons } from '@expo/vector-icons';

// Create a Bottom Tab Navigator
const NavBar = createBottomTabNavigator();

// Set notification handler for customizing notification behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Main App component
export default function App() {

  // Setting the variables for Expo Push Token and Notifications
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  // Effect hook to register for push notifications and create the listeners
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    // Cleans listeners of resources, subscriptions, etc. when no longer in DOM, removing listeners from current lifecycle
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  // Render Notification Tester + Bottom Tab Navigator
//   return (
//     <NavigationContainer>
//       <NavBar.Navigator
//         screenOptions={({ route }) => ({
//           tabBarLabel: route.name,
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => {

//           },
//         })}
//       >


//         <NavBar.Screen name="Home">
//           {() => (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
//               <Button
//                 title="Press to schedule a notification"
//                 onPress={async () => {
//                   await schedulePushNotification();
//                 }}
//               />
//             </View>
//           )}
//         </NavBar.Screen>

//         <NavBar.Screen name="Mood Log" component={MoodLogStackScreen} />
//         <NavBar.Screen name="Settings" component={SettingsStackScreen} />
//       </NavBar.Navigator>
//     </NavigationContainer>
//   );
// }
  return (
    <NavigationContainer>
      <NavBar.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: Globals.primary
          },
          tabBarLabel: route.name,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } 
            else if (route.name === 'Mood Log') {
              iconName = 'happy';
            } 
            else if (route.name === 'Settings') {
              iconName = 'settings';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Globals.primaryLight,
          tabBarInactiveTintColor: Globals.navIconDark
        })}
      >
        {/* screen for home tab */}
        <NavBar.Screen name="Home" component={HomeStackScreen} />
        <NavBar.Screen name="Mood Log" component={MoodLogStackScreen} />
        <NavBar.Screen name="Settings" component={SettingsStackScreen} />
      </NavBar.Navigator>
    </NavigationContainer>
  );
}

// Pushes notification after 2 seconds
async function schedulePushNotification() {
  // testing
  console.log("Scheduling push notification");
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "New Med Incoming!",
      body: 'You have added a new medication',
      data: { data: 'goes here' },
    },
    // set to 0 seconds for testing purposes
    trigger: null,
  });
}

// allows registration for new devices for push notifications
async function registerForPushNotificationsAsync() {
  let token;

  // Setting up notification channel for Android
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  // Check if the app has permissions to recieve notifications
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    // testing
    console.log("Notification Permissions Status:", finalStatus);

    // Alert for permissions not granted
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }

    // Get the Expo Push Token for testing purposes
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {

    // Show alert if not running on physical device (Expo Go Tool does not work for emulators)
    alert('Must use physical device for Push Notifications!');
  }

  return token;
}
