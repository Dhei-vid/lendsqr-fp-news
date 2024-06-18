import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, Image} from 'react-native';
import {useContext} from 'react';
import {MainContext} from '../../context/MainContext';
import NewsListings from '../screens/app/news-listing-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const deviceStyle = Platform.OS === 'android' && {
  paddingBottom: 10,
  height: 80,
};

const tabBarStyle = {
  // backgroundColor: lightPurple,
  // paddingBottom: 25,
  borderTopWidth: 0,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,
  elevation: 24,
  shadowColor: 'black',
  borderTopLeftRadius: 21,
  borderTopRightRadius: 21,
  height: 95,
  ...deviceStyle,
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#e91e63',
  },
};

function MainNavigation() {
  return (
    <NavigationContainer independent theme={MyTheme}>
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
          // tabBarShowLabel: false,
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: 'white',
          tabBarStyle,
          tabBarLabelStyle: {
            fontSize: 13,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={NewsListings}
          options={() => ({
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="rocket" size={30} color={color} />
            ), //something about the color did not work
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
