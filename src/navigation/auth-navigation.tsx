import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStartedScreen from '../screens/auth/get-started-screen';
import LogInScreen from '../screens/auth/log-in-screen';
import SignupScreen from '../screens/auth/sign-up-screen';
import SignUpWithGoogle from '../screens/auth/sign-up-google';

const Stack = createNativeStackNavigator<AuthStackParams>();

export type AuthStackParams = {
  GetStarted: undefined;
  Login: undefined;
  Signup: undefined;
  SignupWithGoogle: undefined;
};

function AuthNavigation() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="SignupWithGoogle" component={SignUpWithGoogle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigation;
