import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackArrow from '../assets/Lend_Logo.svg';
import ChevronIcon from '../assets/chevron_left.svg';

interface IBUtton {
  style?: StyleProp<ViewStyle>;
}

export const BackButton: React.FC<IBUtton> = ({style}) => {
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.main, style]}
      onPress={() => navigate.goBack()}>
      <ChevronIcon style={styles.icon} width={40} height={40} color={'black'} />
      <Text style={{fontSize: 17}}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
