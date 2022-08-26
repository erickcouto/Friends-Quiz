import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  padding: 10px;
`;
export const Logo = styled.Image`
  height: 200px;
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  font-family: helvetica;
  color: #fff;
  margin-top: 20px;
`;
export const Subtitle = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  font-family: helvetica;
  margin-bottom: 10px;
  color: #fff;
`;
export const Box = styled.View`
  elevation: 10;
  background: #fff;
  padding: 20px;
  width: 300px;
  margin-right: 20px;
  border-radius: 10px;
  height: 250px;
  justify-content: center;
`;

export const BoxText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-family: helvetica;
  color: ${props => props.color || '#000'};
  margin-bottom: 10px;
`;
