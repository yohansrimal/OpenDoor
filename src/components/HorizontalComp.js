import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HorizontalComponent = () => {
  return (
    <View style={styles.flexView}>
      <View style={styles.line} />
      <Text style={styles.text}>or</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  flexView: {
    flexDirection: 'row',
  },

  line: {
    backgroundColor: '#FFFFFF',
    height: 2,
    flex: 1,
    alignSelf: 'center',
    marginLeft: 20,
    marginRight: 20,
  },

  text: {
    alignSelf: 'center',
    color: '#BDBDBD',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default HorizontalComponent;
