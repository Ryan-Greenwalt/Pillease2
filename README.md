# Pillease - Medication Management App for Neurodivergent Individuals

Pillease is an accessible Android and iOS app designed to help individuals with Autism and other neurodivergent disorders manage their medication effectively. This project was created as part of the CSCI436: Technology for Social Good course at Western Washington University by the collaborative efforts of Maddie Knappenberger, Takira Boltman, Kiel Selapack, and Ryan Greenwalt.

## Table of Contents
- [Introduction](#pillease---medication-management-app-for-neurodivergent-individuals)
- [How to Use](#use)
- [Features](#features)
  - [Welcome Message](#welcome-message)
  - [Active Daily Medications](#active-daily-medications)
  - [Mood Logger](#mood-logger)
  - [Bottom Navigation Bar](#bottom-navigation-bar)
  - [Settings Page](#settings-page)
    - [Visual Accessibility](#visual-accessibility)
    - [Audio Accessibility](#audio-accessibility)
    - [ASD Education](#asd-education)
    - [Caregiver Info](#caregiver-info)
    - [User Feedback](#user-feedback)
    - [Health Profile](#health-profile)
  - [Medication Management Page](#medication-management-page)
## How to Use

If you would like to test or simply try Pillease, you can run the app locally using your pc and mobile phone by following these steps:

1. **Clone the Repository**: Open a terminal or command prompt and navigate to the directory where you want to store the project. Clone the repository using the following command:

   ```bash
   git clone https://github.com/Ryan-Greenwalt/Pillease2.git
   
2. **On your Mobile Device**
   Install Expo Go from your device's app store and create an account

3. **On your PC**
   npm install -g expo-cli (this allows us to use "expo" in commands)
  expo install expo-device
  expo install expo-constants
   expo install expo-notifications
  expo install expo-image-picker
  npm install react-native-vector-images
  npm install react-native-dropdown-picker

If things are still giving you trouble, you might need to build with
EAS. I will include the eas.JSON in my push, but not sure if it will
configure with just that. So here are the commands to get setup with
EAS:
npm install -g eas-cli
eas login (this is your Expo Go Account)
eas whoami (checks that you are indeed logged in)
eas build (when you do this, it will ask for your login stuff) (doesn't
matter if you don't have an Apple Dev account)
Now the project will show up as an Android project in the Expo Go Dev
Tools

**How to Run**:
In terminal: npx expo start

**On Apple Devices**: Once the app is running, scan the QR code with your phone's camera.
It will take you to Expo Go running the app. Enjoy!

**On Android Devices**: Open Expo Go, and choose “Scan QR Code”, and
scan QR code with your mobile device’s camera to run the app on your
smartphone. Enjoy!

## Features

### Welcome Message

Pillease welcomes users with a message on every main page of the app. This message includes the number of medications they need to take today. The goal is to provide a gentle reminder without overwhelming users with constant notifications.

### Active Daily Medications

- Displays up to three active medications for the day.
- Provides a button to confirm medication intake, displaying a checkmark and the next scheduled time.
- Tracks medication "streaks" to encourage consistent use.
- Future implementation of "Streak" awards for milestones.

### Mood Logger

- Daily mood-logging with space for additional notes.
- Helps users track potential side effects, overdoses, and harmful drug combinations.
- Aids caregivers and healthcare providers in monitoring the user's well-being.

### Bottom Navigation Bar

- Four easily recognizable icons (house, clipboard, smiley face, cog wheel) for navigation.
- Avoids unnecessary text, catering to users with ASD.
- Intuitive navigation to the Home Page, Medication Management, Mood Log, and Settings.

### Settings Page

#### Visual Accessibility

- Customizable visual settings, including color contrast, font size, and background color.
- Options for entire color "themes" for a cohesive visual experience.
- Users can select familiar icons for medications and upload personalized images.
- Personalized alerts and gesture controls.
- "Streak" rewards for achieving milestones.

#### Audio Accessibility

- Text-to-speech feature to read medication names and dosage instructions.
- Customizable voice preferences.
- Auditory reminders as an alternative to visual reminders.
- "Quiet Mode" to limit or mute non-essential auditory feedback.

#### ASD Education

- Provides accessible information on Autism Spectrum Disorder (ASD), including characteristics, challenges, and strengths.
- Crisis intervention information for missing doses, overdoses, side effects, and other emergencies.
- Links to community forums and support groups for users with ASD.

#### Caregiver Info

- Overview of active medications.
- Detailed dosage and administration instructions.
- Specific considerations and techniques for individuals with Autism.
- Communication tools for caregivers to interact with medical professionals.

#### User Feedback

- A dedicated feature for users to provide direct feedback to improve Pillease.

#### Health Profile

- Contains essential health information, such as allergies and underlying conditions.

### Medication Management Page

#### Medication List

- Displays all active medications with customizable names and icons.
- Indicates if medication still needs to be taken or has already been taken.
- Tracks medication streaks.
- Offers a dropdown menu for detailed dosage information.

#### Add/Delete Button

- Provides accessible buttons to add or delete medications.

#### Edit Medication

- Allows users to edit medication details at any time, including name, dosage, days, and times.

Pillease is committed to creating an inclusive, empowering, and accessible medication management experience for neurodivergent individuals. We value your feedback to improve our app further. Updates on development will be provided in this file as we progress through the project. Thank you for believing in us!
