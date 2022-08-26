import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AlertDialog from '../../Components/AlertDialog';
import Question from '../../Components/Question';
import {getQuestions} from '../../Store/service';
import {cleanAll, setActiveQuestion} from './GameSlice';

import {Container, Count, QuestionTitle} from './styles';

const Game = ({route, navigation}) => {
  const [actualQuestion, setActualQuestion] = useState({});
  const dispatch = useDispatch();
  const {questions, activeQuestion} = useSelector(state => state.game);
  const {loading, error} = useSelector(state => state.general);
  const {params} = route;
  useEffect(() => {
    dispatch(cleanAll());
    dispatch(getQuestions(params.difficulty));
    dispatch(setActiveQuestion(0));
  }, []);

  const handleFinish = () => {
    navigation.navigate('Result');
  };
  return (
    <Container source={require('../../Assets/Images/bg.png')}>
      {loading && <ActivityIndicator color="#fff" size={'large'} />}

      {error && (
        <AlertDialog
          title="Erro ao recuperar dados"
          image={require('../../Assets/Images/joey.gif')}
          onClose={() => navigation.goBack()}>
          Erro ao tentar baixar as informações do servidor, tente novamente mais
          tarde.
        </AlertDialog>
      )}

      {questions?.length > 0 && (
        <>
          <Count>
            {activeQuestion + 1} de {questions.length}
          </Count>
          <Question onFinish={handleFinish} />
        </>
      )}
    </Container>
  );
};

export default Game;
