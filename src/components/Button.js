import React from 'react';

import {TouchableOpacity, Text} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={props.style.touchableComponent}>
      <Text style={props.style.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
