import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import StatusBar from '../components/LoginScreen/StatusBar.js';
import CustomTextInput from '../components/LoginScreen/CustomTextInput.js';
import HorizontalComp from '../components/LoginScreen/HorizontalComp.js';
import Button from '../components/LoginScreen/Button.js';

const LoginScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#373844', '#006590', '#006590', '#006590', '#373844']}>
      <SafeAreaView style={styles.SafeAreaView} backgroundColor="transparent">
        {/* Status Bar  */}
        <StatusBar translucent={true} backgroundColor="transparent" />

        {/* Scroll View  */}
        <ScrollView
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          {/* Main Container */}
          <View style={styles.container}>
            <View style={styles.topFlexBox}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.logo}
                  source={require('../assets/images/logo.png')}
                />
              </View>

              <Text style={styles.heading}>Redeem code</Text>

              <Text style={styles.subheading}>
                Please enter or scan your contact's card unique code
              </Text>

              <CustomTextInput />
            </View>

            <View style={styles.flexBox1}>
              <HorizontalComp />

              <View style={styles.bottomFlexBox}>
                <View style={styles.flexBox1}>
                  <Button
                    style={registerButtonStyle}
                    name={'Register'}
                    navigate={navigation}
                    url={'Chat'}
                  />
                </View>
                <View style={{margin: 4}} />
                <View style={styles.flexBox1}>
                  <Button
                    style={loginButtonStyle}
                    name={'Login'}
                    navigate={navigation}
                    url={'Chat'}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
  },

  logo: {
    justifyContent: 'center',
    width: 260,
    height: 260,
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    marginLeft: 20,
    marginTop: 50,
    textAlign: 'left',
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },

  subheading: {
    color: '#BDBDBD',
    marginTop: 11,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },

  flexBox1: {
    flex: 1,
  },

  flexBox2: {
    flex: 2,
  },

  flexBox3: {
    flex: 3,
  },

  flexBox4: {
    flex: 4,
  },

  topFlexBox: {
    flex: 4,
    justifyContent: 'center',
  },

  bottomFlexBox: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 24,
  },

  SafeAreaView: {
    height: '100%',
  },
});

const registerButtonStyle = StyleSheet.create({
  touchableComponent: {
    alignSelf: 'stretch',
    backgroundColor: '#EC7942',
    borderWidth: 1,
    borderColor: '#EC7942',
    borderRadius: 12,
  },
  text: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 23,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Poppins-Medium',
  },
});

const loginButtonStyle = StyleSheet.create({
  touchableComponent: {
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 12,
  },
  text: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 23,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Poppins-Medium',
  },
});

export default LoginScreen;
