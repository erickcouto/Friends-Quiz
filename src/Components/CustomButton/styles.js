import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: #fff;
  padding: 16px;
  border-radius: 16px;
  width: 100%;
  margin-bottom: 20px;
`;
export const Text = styled.Text`
  font-size: 16px;
  color: #000;
  text-align: ${props => (props.center ? 'center' : 'left')};
`;
