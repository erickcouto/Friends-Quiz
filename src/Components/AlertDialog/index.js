import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeError, hideError} from '../../Store/GeneralSlice';

import {CloseButton, CloseText, Container, Image, Text, Title} from './styles';

const AlertDialog = ({children, title, image, onClose}) => {
  const dispatch = useDispatch();
  const handleOnClose = () => {
    dispatch(hideError(false));
    onClose();
  };
  return (
    <Container>
      <Title>{title}</Title>
      <Image source={image} />
      <Text>{children}</Text>

      <CloseButton onPress={handleOnClose}>
        <CloseText>X</CloseText>
      </CloseButton>
    </Container>
  );
};

export default AlertDialog;
