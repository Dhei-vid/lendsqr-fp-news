import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AuthStackParams} from '../../navigation/auth-navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GoogleLogin, IGoogleLogin} from '../../../firebase/user';
import auth from '@react-native-firebase/auth';
import {ActivityIndicator} from 'react-native';

type SignupScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'SignupWithGoogle'
>;

const SignUpWithGoogle: React.FC<SignupScreenProps> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [userValue, setUserValue] = useState('')

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    console.log('triggered');
    try {
      const response = await GoogleLogin();
      const {idToken} = response as IGoogleLogin;

      console.log(idToken);

      if (idToken) {
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        await auth().signInWithCredential(googleCredential);
      }
    } catch (error) {
      console.log('Error signing in ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.main}>
      <Text>Sign Up with Google</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleBtn} onPress={handleGoogleLogin}>
        {isLoading ? (
          <ActivityIndicator size={'small'} />
        ) : (
          <View>
            <Text>Sign Up with Google</Text>
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
  googleBtn: {
    marginVertical: 30,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
});
