import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {AuthStackParams} from '../../navigation/auth-navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type GetStartedScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'GetStarted'
>;

const GetStartedScreen: React.FC<GetStartedScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.main}>
        <Text>Get Started Screen</Text>
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
    gap: 20,
  },
  btn: {
    height: 50,
    backgroundColor: '#385f71',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    // width: 120,
    // height: 50,
  },
  btnText: {
    color: 'white',
  },
});
