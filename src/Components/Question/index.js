import {shuffle} from 'lodash';
import React, {useEffect, useState, useRef} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  setActiveQuestion,
  setActualQuestion,
  setAnswer,
} from '../../Pages/Game/GameSlice';
import CustomButton from '../CustomButton';

import {Container, Image, QuestionTitle} from './styles';
import Timer from '../Timer';

const Question = ({onFinish}) => {
  const timerRef = useRef();
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();
  const time = 10;
  const {activeQuestion, questions, actualQuestion} = useSelector(
    state => state.game,
  );
  useEffect(() => {
    setOptions(
      shuffle([
        {text: actualQuestion?.correct, correct: true},
        {text: actualQuestion?.wrong1, correct: false},
        {text: actualQuestion?.wrong2, correct: false},
        {text: actualQuestion?.wrong3, correct: false},
      ]),
    );
  }, [actualQuestion]);

  useEffect(() => {
    dispatch(setActualQuestion(questions[activeQuestion]));
  }, [activeQuestion]);

  const handleAnswer = answer => {
    if (answer) {
      dispatch(setAnswer({...actualQuestion, answered: answer}));
    }
    timerRef.current.resetTimer();
    if (activeQuestion < questions.length - 1) {
      dispatch(setActiveQuestion(activeQuestion + 1));
      dispatch(setActualQuestion(questions[activeQuestion]));
    } else {
      onFinish();
    }
  };

  return (
    <Container>
      <Timer time={time} onFinish={handleAnswer} ref={timerRef} />
      <QuestionTitle>{actualQuestion?.title}</QuestionTitle>
      {actualQuestion?.photo && (
        <Image resizeMode="cover" source={{uri: actualQuestion?.photo}} />
      )}
      <FlatList
        data={options}
        renderItem={({item}) => (
          <CustomButton onPress={() => handleAnswer(item)}>
            {item.text}
          </CustomButton>
        )}
      />
    </Container>
  );
};

export default Question;
