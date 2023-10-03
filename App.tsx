import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login/Login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/Redux/Store';
import Register from './src/Screens/Register/Register';
import OtpVerification from './src/Screens/OtpVerification/OtpVerification';


const Stack = createNativeStackNavigator();
const MyContext = React.createContext("context");



const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator 
           screenOptions={{
            headerShown: false
          }}
          initialRouteName='Login'>
          <Stack.Screen
              name="Login"
              component={Login}
            />
           <Stack.Screen
              name="Register"
              component={Register}
            />
         <Stack.Screen
              name="OtpVerification"
              component={OtpVerification}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;