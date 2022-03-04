import React from 'react';

import {TouchableOpacity, Text} from 'react-native';

const Button = props => {
  console.log();
  return (
    <TouchableOpacity
      style={props.style.touchableComponent}
      onPress={() => props.navigate.navigate(props.url)}>
      <Text style={props.style.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
