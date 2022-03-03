import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AntIcon from 'react-native-vector-icons/dist/AntDesign';

const ImportBar = () => {
  return (
    <View style={styles.inputSection}>
      <Icon style={styles.qrcodeIcon} name="qrcode" size={28} color="#A1B9CF" />
      <TextInput
        style={styles.input}
        placeholder="CODE HERE"
        placeholderTextColor="#A1B9CF"
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity>
        <AntIcon
          style={styles.arrowIcon}
          name="arrowright"
          size={32}
          color="#A1B9CF"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputSection: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    height: 56,
  },

  qrcodeIcon: {
    padding: 14,
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },

  arrowIcon: {
    paddingRight: 19,
  },

  input: {
    flex: 1,
    // height: '100%',
    textAlign: 'center',
    fontSize: 28,
    color: 'white',
    fontFamily: 'Exo2-Bold',
    // paddingTop: 0,
    // paddingBottom: 0,
  },

  // input: {
  //   borderRadius: 12,
  //   margin: 20,
  //   borderWidth: 0,
  //   padding: 10,
  //   color: 'white',
  //   backgroundColor: 'rgba(0, 0, 0, 0.3)',
  //   fontSize: 28,
  //   textAlign: 'center',
  //   fontFamily: 'Poppins-Medium',
  //   lineHeight: 32,
  // },
});

export default ImportBar;
