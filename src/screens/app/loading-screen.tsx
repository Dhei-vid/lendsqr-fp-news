import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useRef, useEffect} from 'react';
import {View, Animated, Easing, StyleSheet, Text} from 'react-native';
// import { RootStackParams } from '../../navigation/root.navigation';
// import { styles } from './styles';
import Logo from '../assets/Lend_Logo.svg';

const LoadingScreen = () => {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.in(Easing.ease),
        }),
      ]),
    ).start();
  }, []);

  const translateY = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -30],
  });

  return (
    <View style={styles.main}>
      <Animated.View style={{transform: [{translateY: translateY}]}}>
        {/* <Logo width={30} height={30} /> */}
        <Text>Looading...</Text>
      </Animated.View>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
