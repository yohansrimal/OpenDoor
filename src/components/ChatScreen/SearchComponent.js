import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import AntIcon from 'react-native-vector-icons/dist/AntDesign';

import EntypoIcon from 'react-native-vector-icons/dist/Entypo';

const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchBox}>
        <View style={styles.rowContainer}>
          <AntIcon
            name="search1"
            size={14}
            color="#A1B9CF"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#A1B9CF"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>

      <View style={styles.plusIcon}>
        <EntypoIcon name="plus" size={10} color="#A1B9CF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rowContainer: {
    flexDirection: 'row',
  },

  searchBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 10,
    width: 100,
    height: 26,
  },

  icon: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 13.27,
  },

  input: {
    paddingLeft: 0,
    fontSize: 15,
    color: 'white',
    fontFamily: 'Exo2-Light',
    paddingTop: 0,
    paddingBottom: 0,
  },

  plusIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 27,
  },
});

export default SearchBar;
