import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../Components/CustomButton';
import {getFinalScore} from '../Game/GameSlice';

import {Box, BoxText, Container, Logo, Subtitle, Title} from './styles';

const Result = ({navigation}) => {
  const dispatch = useDispatch();
  const {finalScore, questions, answeredQuestions} = useSelector(
    state => state.game,
  );
  useEffect(() => {
    dispatch(getFinalScore());
  }, []);
  const calculatePercentage = score => {
    return (score / questions.length) * 100;
  };
  const getImageResult = score => {
    let percentage = calculatePercentage(score);
    switch (percentage) {
      case 100:
        return require('../../Assets/Images/total.gif');
      case percentage > 80 && percentage < 100:
        return require('../../Assets/Images/good.gif');
      case percentage > 50 && percentage < 80:
        return require('../../Assets/Images/joey.gif');
      case percentage > 20 && percentage < 50:
        return require('../../Assets/Images/medium.gif');
      default:
        return require('../../Assets/Images/bad.gif');
    }
  };

  return (
    <Container source={require('../../Assets/Images/bg.png')}>
      <Title>
        Acertou {finalScore} de {questions.length}
      </Title>
      <Logo resizeMode="contain" source={getImageResult(finalScore)} />

      {finalScore < questions.length && (
        <>
          <Subtitle>Onde foi que errei?</Subtitle>
          <FlatList
            style={{marginTop: 20}}
            horizontal
            data={answeredQuestions.filter(
              question => question.answered.correct === false,
            )}
            renderItem={({item}) => (
              <Box>
                <BoxText>{item.title}</BoxText>
                <BoxText color="#ff0000">
                  Sua resposta: {item.answered.text}
                </BoxText>
                <BoxText color="#658354">
                  Resposta certa: {item.correct}
                </BoxText>
              </Box>
            )}
          />
        </>
      )}

      <CustomButton
        style={{marginTop: 20}}
        center
        onPress={() => navigation.navigate('Home')}>
        Tentar Novamente
      </CustomButton>
    </Container>
  );
};

export default Result;
