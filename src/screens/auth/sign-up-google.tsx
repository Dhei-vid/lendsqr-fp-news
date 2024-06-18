import {View, Text, TouchableOpacity} from 'react-native';
import {AuthStackParams} from '../../navigation/auth-navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type SignupScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'SignupWithGoogle'
>;

const SignUpWithGoogle: React.FC<SignupScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Sign Up with Google</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpWithGoogle;
