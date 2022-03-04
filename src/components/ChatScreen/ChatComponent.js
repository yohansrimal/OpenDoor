import React from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';

const ChatView = props => {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.avatar} source={props.avatar} />

      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{props.name}</Text>

        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.message}>
          {props.message}
        </Text>
      </View>

      <View style={styles.sideContainer}>
        <View style={styles.sideContainer2}>
          <Text style={styles.date}>{props.date}</Text>

          <Text style={styles.time}>{props.time}</Text>

          <View style={styles.notication}>
            {props.notifications === 0 ? null : (
              <View style={styles.noticationIcon}>
                <Text style={styles.notificationNumber}>
                  {props.notifications}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    height: '100%',
  },

  mainContainer: {
    backgroundColor: '#001623',
    marginTop: 17,
    marginBottom: 0,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
    borderRadius: 10,
  },

  input: {
    paddingLeft: 0,
    fontSize: 15,
    color: 'white',
    fontFamily: 'Exo2-Thin',
    paddingTop: 0,
    paddingBottom: 0,
  },

  avatar: {
    width: 52,
    height: 52,
    marginLeft: 14,
    marginTop: 9,
    marginBottom: 9,
  },

  detailsContainer: {
    flexDirection: 'column',
    flex: 6,
  },

  name: {
    color: '#BEBEBE',
    fontSize: 15,
    paddingTop: 9,
    paddingLeft: 8,
    paddingBottom: 0,
    fontFamily: 'Exo2-Medium',
  },

  message: {
    color: '#6D6D6D',
    fontSize: 13,
    paddingTop: 7,
    paddingLeft: 8,
    paddingBottom: 7,
    fontFamily: 'Exo2-Medium',
  },

  sideContainer: {
    flexDirection: 'column',
  },

  sideContainer2: {
    flexDirection: 'column',
    paddingRight: 13,
    alignItems: 'flex-end',
    paddingLeft: 22,
  },

  date: {
    color: '#909090',
    fontSize: 12,
    paddingTop: 9,
    paddingLeft: 8,
    paddingBottom: 0,
    fontFamily: 'Exo2-Light',
  },
  time: {
    color: '#6D6D6D',
    fontSize: 12,
    fontFamily: 'Exo2-Light',
  },

  notication: {
    paddingTop: 6,
    paddingRight: 9,
  },

  noticationIcon: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: 18,
    height: 18,
    backgroundColor: '#0062BD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  notificationNumber: {color: '#1A1A1A', fontFamily: 'Poppins-Bold'},
});

export default ChatView;
