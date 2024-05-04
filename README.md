# React Native Mobile Chat App
***

## Objective
To build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.

## Features and Requirements User Stories
* As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.
* As a user, I want to be able to send messages to my friends and family members to exchange the latest news.
* As a user, I want to send images to my friends to show them what I’m currently doing.
* As a user, I want to share my location with my friends to show them where I am.
* As a user, I want to be able to read my messages offline so I can reread conversations at any
time.
* As a user with a visual impairment, I want to use a chat app that is compatible with a screen
reader so that I can engage with a chat interface.
## Key Features
+ A page where users can enter their name and choose a background color for the chat screen before joining the chat.
+ A page displaying the conversation, as well as an input field and submit button.
+ The chat must provide users with two additional communication features: sending images
and location data.
+ Data gets stored online and offline.
Technical Requirements
+ The app must be written in React Native.
+ The app must be developed using Expo.
+ The app must be styled according to the given screen design.
+ Chat conversations must be stored in Google Firestore Database.
+ The app must authenticate users anonymously via Google Firebase authentication.
+ Chat conversations must be stored locally.
+ The app must let users pick and send images from the phone’s image library.
+ The app must let users take pictures with the device’s camera app, and send them.
+ The app must store images in Firebase Cloud Storage.
+ The app must be able to read the user’s location data.
+ Location data must be sent via the chat in a map view.
+ The chat interface and functionality must be created using the Gifted Chat library.
+ The app’s codebase must contain comments.
## Dependencies
+ @react-navigation/native: ^6.1.17
+ @react-navigation/native-stack: ^6.9.26
+ expo: ~50.0.13
+ expo-status-bar: ~1.11.1
+ firebase: ^10.3.1
+ react: "18.2.0
+ react-native: 0.73.6
+ react-native-gifted-chat: ^2.4.0
+ @react-native-async-storage/async-storage: 1.21.0
+ @react-native-community/netinfo: 11.1.0
+ expo-location: ~16.5.5
+ react-native-maps: 1.10.0
+ expo-image-picker: ~14.7.1
## Setup Instructions
Follow these steps to get the app running on your local machine:

1- Clone the repository: Use the command https://github.com/solzurch/ChatApp.git to clone the repository to your local machine.

2-Navigate to the project directory: Use the command cd your-repo-name to navigate into the root directory of the project.

3-Install Node.js and npm.

4- Install Expo CLI: Use the command npm install -g expo-cli to install Expo CLI globally on your machine.

5- Install dependencies: Use the command npm install to install all the necessary dependencies for the project.

6- Start the app: Use the command npm start or expo start to start the app. This will open a new browser window with the Expo developer tools.

7- Run the app on your device/emulator: You can either use an Android/iOS emulator or directly run the app on your mobile device using the Expo Go app. Scan the QR code displayed in the Expo developer tools with the Expo Go app to run the app on your device.

Please note that you'll need to have the Expo Go app installed on your device to run the app. You can download it from the App Store or Google Play Store.

Remember to replace your-repo-name with the actual URL and name of your repository.
