import React from 'react';
import {StatusBar} from 'react-native';

const CustomStatusBar = props => {
  return (
    <StatusBar
      translucent={props.translucent}
      backgroundColor={props.backgroundColor}
    />
  );
};

export default CustomStatusBar;
