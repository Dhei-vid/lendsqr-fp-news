import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsListings from '../screens/app/news-listing-screen';
import NewsDetail from '../screens/app/news-details';
import {INews} from '../common/types';

const Stack = createNativeStackNavigator<AppStackParams>();

export type AppStackParams = {
  NewsListing: undefined;
  NewsDetail: {data: INews};
};

function AppNavigation() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="NewsListing" component={NewsListings} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
