import React from 'react';
import {View, StyleSheet} from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#ced4da',
    marginVertical: 10,
  },
});

export default Separator;
