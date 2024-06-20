import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
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

type SignupScreenProps = NativeStackScreenProps<AuthStackParams, 'Signup'>;

const SignupScreen: React.FC<SignupScreenProps> = ({navigation}) => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignup = async () => {
    setIsLoading(true);
    try {
      const userData = {fullName, email, phoneNumber};

      if (fullName && email && phoneNumber) {
        navigation.navigate('SignupWithGoogle', {userData});
      } else {
        Alert.alert('Please Enter your Information');
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

          <View style={styles.formContainer}>
            <View style={styles.headingTextContainer}>
              <Text style={styles.signUpText}>SIGN UP</Text>
              <Text>
                New to the App? Click on "Continue" to store your information
                and continue to Sign Up
              </Text>
            </View>

            <View style={styles.inputMain}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="gray"
                keyboardType="default"
                onChangeText={setFullName}
                value={fullName}
              />
            </View>

            <View style={styles.inputMain}>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="gray"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
              />
            </View>

            <View style={styles.inputMain}>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="gray"
                keyboardType="phone-pad"
                onChangeText={setPhoneNumber}
                value={phoneNumber}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.continueBtn} onPress={handleSignup}>
            {isLoading ? (
              <ActivityIndicator size={'small'} color={'white'} />
            ) : (
              <View>
                <Text style={styles.continueBtnText}>Continue</Text>
              </View>
            )}
          </TouchableOpacity>
        </ScrollView>
      </HideKeyboard>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    marginVertical: 50,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
  },
  iconText: {
    fontSize: 18,
  },
  backNavigation: {
    marginBottom: 100,
  },
  inputMain: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
  continueBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#385f71',
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
