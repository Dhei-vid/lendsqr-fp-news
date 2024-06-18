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

type LoginScreenProps = NativeStackScreenProps<AuthStackParams, 'Login'>;

const LogInScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Log In Screen</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogInScreen;
