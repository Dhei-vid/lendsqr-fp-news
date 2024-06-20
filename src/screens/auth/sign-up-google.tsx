import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {AuthStackParams} from '../../navigation/auth-navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BackButton} from '../../components/back-button';
import {GoogleLogin, IGoogleLogin} from '../../../firebase/user';
import auth from '@react-native-firebase/auth';
import {ActivityIndicator} from 'react-native';
import GoogleIcon from '../../assets/icons8-google.svg';

type SignupScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'SignupWithGoogle'
>;

const SignUpWithGoogle: React.FC<SignupScreenProps> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
    } catch (error) {
      console.log('Error signing in ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.main}>
      <Text>Sign Up with Google</Text>

      <BackButton style={styles.backNavigation} />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.googleBtnContainer}
        onPress={handleGoogleLogin}>
        {isLoading ? (
          <ActivityIndicator size={'small'} />
        ) : (
          <View style={styles.googleBtn}>
            <GoogleIcon width={30} height={30} />
            <Text>Sign Up with Googles</Text>
          </View>
        )}
        <View></View>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpWithGoogle;

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },
  googleBtnContainer: {
    marginVertical: 30,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  backNavigation: {
    marginBottom: 100,
  },
});
