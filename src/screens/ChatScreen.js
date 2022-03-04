import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import Chat from '../components/ChatScreen/ChatComponent.js';
import SearchBar from '../components/ChatScreen/SearchComponent';
import {dummy_data_array} from '../sampleData/ChatData';

const ChatScreen = ({navigation}) => {
  const headerHeight = useHeaderHeight();

  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
    title: 'Chats',
    headerTitleStyle: {
      fontFamily: 'Poppins-Medium',
      color: '#A1B9CF',
      fontSize: 40,
    },
    headerStyle: {
      backgroundColor: '#002236',
    },
    headerRight: () => <EntypoIcon name="plus" size={34} color="#A1B9CF" />,
    headerBackVisible: false,
  });

  return (
    <SafeAreaView style={styles.SafeAreaView} backgroundColor="transparent">
      <View style={{marginTop: headerHeight, backgroundColor: '#001420'}}>
        <SearchBar />
      </View>

      <ScrollView style={styles.layout2}>
        {/* Main component of chat view */}
        {dummy_data_array.map(data => {
          return (
            <Chat
              key={data.id}
              avatar={data.avatarUrl}
              name={data.name}
              message={data.message}
              date={data.date}
              time={data.time}
              notifications={data.notifications}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    height: '100%',
  },

  layout1: {},

  layout2: {
    backgroundColor: '#000000',
    height: '100%',
  },
});

export default ChatScreen;
