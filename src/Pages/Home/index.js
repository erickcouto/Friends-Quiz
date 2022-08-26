import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import Sound from 'react-native-sound';
import {useDispatch, useSelector} from 'react-redux';
import AlertDialog from '../../Components/AlertDialog';

import CustomButton from '../../Components/CustomButton';
import {getDifficulties} from '../../Store/service';

import {
  Center,
  Container,
  Logo,
  SoundButton,
  SoundButtonImage,
  Title,
} from './styles';

const Home = ({navigation}) => {
  const [soundOn, setSoundOn] = useState(true);
  const dispatch = useDispatch();
  const {difficulties} = useSelector(state => state.home);
  const {error, loading} = useSelector(state => state.general);

  useEffect(() => {
    loadSong();
    getData();
  }, []);

  const getData = () => {
    dispatch(getDifficulties());
  };
  const loadSong = async () => {
    song = new Sound('song.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      song.stop();
      song.play();
    });
    return () => {
      song.stop();
    };
  };

  const handleClick = difficulty => {
    navigation.navigate('Game', {difficulty});
  };

  return (
    <Container source={require('../../Assets/Images/bg.png')}>
      <Center>
        <Logo
          resizeMode="contain"
          source={require('../../Assets/Images/logo.png')}
        />
        {loading && <ActivityIndicator color="#fff" size={'large'} />}

        {error && (
          <AlertDialog
            title="Erro ao recuperar dados"
            image={require('../../Assets/Images/joey.gif')}
            onClose={() => getData()}>
            Erro ao tentar baixar as informações do servidor, tente novamente
            mais tarde.
          </AlertDialog>
        )}
        {!error && (
          <FlatList
            data={difficulties}
            style={{flex: 1, width: '100%'}}
            renderItem={({item}) => (
              <CustomButton center onPress={() => handleClick(item.id)}>
                {item.name}
              </CustomButton>
            )}
          />
        )}
      </Center>
      <SoundButton
        onPress={() => {
          if (soundOn) {
            song.stop();
          } else {
            loadSong();
          }
          setSoundOn(!soundOn);
        }}>
        <SoundButtonImage
          source={
            soundOn
              ? require('../../Assets/Images/volume.png')
              : require('../../Assets/Images/mute.png')
          }
        />
      </SoundButton>
    </Container>
  );
};

export default Home;
