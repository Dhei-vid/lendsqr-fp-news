import {useState, useContext} from 'react';
import {MainContext} from '../../../context/MainContext';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {AuthStackParams} from '../../navigation/auth-navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HideKeyboard from '../../components/hideKeyboard';
import {BackButton} from '../../components/back-button';
import {useNavigation} from '@react-navigation/native';

type LoginScreenProps = NativeStackScreenProps<AuthStackParams, 'Login'>;

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const context = useContext(MainContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogIn = async () => {
    setIsLoading(true);
    try {
      if (context) {
        const {setIsAuth} = context;
        setIsAuth(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <HideKeyboard>
        <ScrollView
          style={styles.main}
          contentContainerStyle={{justifyContent: 'center'}}>
          <BackButton style={styles.backNavigation} />

          <View style={styles.content}>
            <View style={styles.headingTextContainer}>
              <Text style={styles.signUpText}>LOG IN</Text>
            </View>

            <TouchableOpacity style={styles.continueBtn} onPress={handleLogIn}>
              {isLoading ? (
                <ActivityIndicator size={'small'} color={'white'} />
              ) : (
                <View>
                  <Text style={styles.continueBtnText}>Login With Google</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </HideKeyboard>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  main: {
    flex: 1,
    marginVertical: 50,
  },
  content: {
    paddingHorizontal: 20,
    gap: 50,
  },
  iconText: {
    fontSize: 18,
  },
  backNavigation: {
    marginBottom: 100,
  },
  continueBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#349898',
    borderRadius: 10,
    marginTop: 40,
  },
  continueBtnText: {
    color: 'white',
  },
  signUpText: {
    fontSize: 25,
    color: 'black',
  },
  headingTextContainer: {
    gap: 15,
  },
});
