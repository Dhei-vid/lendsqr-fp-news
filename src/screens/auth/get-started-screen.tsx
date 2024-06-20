import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {AuthStackParams} from '../../navigation/auth-navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import GetStartedLogo from '../../assets/HeroIllustration.svg';

const windowWidth = Dimensions.get('window').width;

type GetStartedScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'GetStarted'
>;

const GetStartedScreen: React.FC<GetStartedScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.main}>
        <View style={styles.content}>
          <View style={styles.getstartedImage}>
            <GetStartedLogo width={350} height={300} />
          </View>
          <Text style={styles.headerText}>
            The best loan management system for smart lenders
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  main: {
    flex: 1,
    padding: 20,
    marginVertical: 50,
    justifyContent: 'center',
    gap: 30,
  },
  content: {
    justifyContent: 'center',
    gap: 30,
  },
  btn: {
    height: 50,
    backgroundColor: '#349898',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  btnText: {
    color: 'white',
  },
  getstartedImage: {
    padding: 0,
    margin: 0,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 35,
    color: 'black',
  },
  btnContainer: {
    marginVertical: 20,
    gap: 10,
  },
});
