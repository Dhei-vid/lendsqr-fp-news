import {useContext} from 'react';
import {MainContext} from '../../context/MainContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingScreen from '../screens/app/loading-screen';
import MainNavigation from './main-navigation';
import AuthNavigation from './auth-navigation';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  const context = useContext(MainContext);

  if (!context) return null;

  const {isAuth, isLoading} = context;

  return (
    <NavigationContainer independent>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isLoading && (
          <Stack.Screen name="Loading" component={LoadingScreen} />
        )}
        {isAuth ? (
          <Stack.Screen name="Main" component={MainNavigation} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
