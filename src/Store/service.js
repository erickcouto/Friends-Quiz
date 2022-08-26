import {createAsyncThunk} from '@reduxjs/toolkit';

const baseUrl = 'http://marcelo.erickalves.com.br/';

export const getQuestions = createAsyncThunk('quiz', async difficulty => {
  console.log(`${baseUrl}quiz/${difficulty}`);
  const response = await fetch(`${baseUrl}quiz/${difficulty}`);
  const data = await response.json();
  return data;
});

export const getDifficulties = createAsyncThunk('quizdifficulty', async () => {
  const response = await fetch(`${baseUrl}quizdifficulty`);
  const data = await response.json();
  return data;
});
