import {useState, useContext} from 'react';
import {MainContext} from '../../../context/MainContext';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthStackParams} from '../../navigation/auth-navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HideKeyboard from '../../components/hideKeyboard';
import LogoImage from '../../assets/logo.svg';

type SignupScreenProps = NativeStackScreenProps<AuthStackParams, 'Signup'>;

const SignupScreen: React.FC<SignupScreenProps> = ({navigation, route}) => {
  // const { setUser } = useContext(MainContext);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleSignup = async () => {
    // try {
    //   const newUser = await userSignup({
    //     name,
    //     email,
    //     password,
    //     confirmPassword,
    //     terms,
    //   });
    //   setUser(newUser);
    // } catch (error) {
    //   console.log(error);
    //   alert(error);
    // }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <HideKeyboard>
        <View style={styles.main}>
          <TouchableOpacity
            style={styles.backNavigation}
            onPress={() => navigation.goBack()}>
            <Text style={styles.iconText}>Back</Text>
            <Text style={styles.iconText}>SIGN UP</Text>
          </TouchableOpacity>
          <View style={styles.formContainer}>
            {/* <LogoImage style={styles.Logo} width={40} height={50} /> */}
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

          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => {
              handleSignup();
              navigation.navigate('SignupWithGoogle');
            }}>
            <Text style={styles.continueBtnText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
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
    padding: 20,
    marginVertical: 50,
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 18,
  },
  backNavigation: {
    marginBottom: 20,
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
    // marginTop: 20,
  },
  continueBtnText: {
    color: 'white',
  },
});
