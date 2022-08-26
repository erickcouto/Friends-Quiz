import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const Center = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;
export const Logo = styled.Image`
  height: 200px;
  width: 300px;
`;
export const Title = styled.Text`
  font-size: 35px;
  text-align: center;
  font-weight: bold;
  font-family: helvetica;
`;
export const SoundButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
export const SoundButtonImage = styled.Image`
  width: 30px;
  height: 30px;
`;
