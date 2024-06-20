import {useRef, useEffect} from 'react';
import {View, Animated, Easing, StyleSheet, Image} from 'react-native';

const LoadingScreen = () => {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  const icons = {
    logo: require('../../assets/Lend_Logo.png'),
  };

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
        <Image source={icons.logo} style={{height: 50, width: 50}} />
      </Animated.View>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
