import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  position: absolute;
  z-index: 1000;
  top: 33%;
  left: 0;
  right: 0;
  border-radius: 10px;
  padding: 20px;
  opacity: 0.9;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 20px;
`;
export const Text = styled.Text`
  color: #000;
  font-size: 16px;
  text-align: center;
`;

export const Image = styled.Image`
  height: 200px;
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  background: #000;
  position: absolute;
  z-index: 1000;
  top: 10px;
  right: 10px;
  border-radius: 25px;
  height: 30px;
  width: 30px;
  padding: 5px;
  opacity: 0.9;
  align-items: center;
  justify-content: center;
`;

export const CloseText = styled.Text`
  color: #fff;
  font-family: helvetica;
  font-size: 12px;
  font-weight: bold;
`;
