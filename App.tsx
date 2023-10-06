import {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Screens/Login/Login';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store';
import Register from './src/Screens/Register/Register';
import OtpVerification from './src/Screens/OtpVerification/OtpVerification';

const AuthStack = createNativeStackNavigator();
const AfterLoginStack = createNativeStackNavigator();


const App = () => {
 
  const getCurrentStatck = () => {
    if (true) {
      return (
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login">
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="Register" component={Register} />
          <AuthStack.Screen
            name="OtpVerification"
            component={OtpVerification}
          />
        </AuthStack.Navigator>
      );
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>{getCurrentStatck()}</NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
