import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

function SettingsScreen({ navigation }) {
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.container}>
            {/* <Text style={styles.headerText}>Settings</Text> */}
    
            {/* Row 1 */}
            <View style={styles.buttonsRow}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigateToScreen('Visual Accessibility')}>
                        <Image source={require('../assets/visual.png')} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Visual Accessibility</Text>
                </View>
    
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigateToScreen('Audio Accessibility')}>
                        <Image source={require('../assets/audio.png')} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Audio Accessibility</Text>
                </View>
            </View>
    
            {/* Row 2 */}
            <View style={styles.buttonsRow}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigateToScreen('ASD Education')}>
                        <Image source={require('../assets/asdinfo.png')} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>ASD Education</Text>
                </View>
    
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigateToScreen('Caregiver Info')}>
                        <Image source={require('../assets/caregiver.png')} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Caregiver Info</Text>
                </View>
            </View>
    
            {/* Row 3 */}
            <View style={styles.buttonsRow}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigateToScreen('User Feedback')}>
                        <Image source={require('../assets/feedback.png')} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>User Feedback</Text>
                </View>
    
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigateToScreen('Health Profile')}>
                        <Image source={require('../assets/healthprofile.png')} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Health Profile</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around', // Adjusted to evenly distribute rows
        alignItems: 'center',
        paddingHorizontal: 55, // Added horizontal padding
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonImage: {
        width: 60,
        height: 60,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
    },
});


export default SettingsScreen;


// Backup for when I inevitably break something

// import React from 'react';
// import { StyleSheet, Button, Text, View, TouchableOpacity, Image} from 'react-native';

// function SettingsScreen({ navigation }) {
//     return (
//         <View style={styles}>
//             <Text>Settings</Text>
//             <Button
//                 title="Visual Accessibility"
//                 onPress={() => navigation.navigate('Visual Accessibility')}
//             />
//             <Button
//                 title="Audio Accessibility"
//                 onPress={() => navigation.navigate('Audio Accessibility')}
//             />
//             <Button
//                 title="ASD Education"
//                 onPress={() => navigation.navigate('ASD Education')}
//             />
//             <Button
//                 title="Caregiver Info"
//                 onPress={() => navigation.navigate('Caregiver Info')}
//             />
//             <Button
//                 title="User Feedback"
//                 onPress={() => navigation.navigate('User Feedback')}
//             />
//             <Button
//                 title="Health Profile"
//                 onPress={() => navigation.navigate('Health Profile')}
//             />
//             <Button
//                 title="Notifications"
//                 onPress={() => navigation.navigate('Notifications')}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
// })

// export default SettingsScreen;
