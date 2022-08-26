import React from 'react';
import {View} from 'react-native';

import {Container, Text} from './styles';

const CustomButton = props => {
  return (
    <Container {...props}>
      <Text center={props.center}>{props.children}</Text>
    </Container>
  );
};

export default CustomButton;
