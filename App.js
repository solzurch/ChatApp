import Start from "./components/Start";
import Chat from "./components/Chat";
import { initializeApp } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { LogBox, Alert } from "react-native";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const Stack = createNativeStackNavigator();

const App = () => {
  // the web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCehT_3rjNFMxd538cr1rK_IleN1QNRYtw",
    authDomain: "chatapp-a6b56.firebaseapp.com",
    projectId: "chatapp-a6b56",
    storageBucket: "chatapp-a6b56.appspot.com",
    messagingSenderId: "98219487104",
    appId: "1:98219487104:web:c1dfc91dfd4d06cd7d9b65",
    measurementId: "G-HPGJ96EZBX",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  const storage = getStorage(app);

  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
