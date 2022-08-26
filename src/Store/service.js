import {createAsyncThunk} from '@reduxjs/toolkit';

//endpoint with drupal as backend
const baseUrl = 'http://marcelo.erickalves.com.br/';

export const getQuestions = createAsyncThunk('quiz', async difficulty => {
  const response = await fetch(`${baseUrl}quiz/${difficulty}`);
  const data = await response.json();
  return data;
  /*
  Response example
  
  [{"title":"Ross tem um animal de estima\u00e7\u00e3o ex\u00f3tico. Qual a esp\u00e9cie e a ra\u00e7a desse animal?",
  "difficulty":"Beginner","correct":"Macaco \/ Marcel","photo":"","wrong1":"Pato \/ Marcel","wrong2":"Gato \/ Muriel",
  "wrong3":"Macaco \/ Muriel"}]
  */
});

export const getDifficulties = createAsyncThunk('quizdifficulty', async () => {
  const response = await fetch(`${baseUrl}quizdifficulty`);
  const data = await response.json();
  return data;

  /*
  Response Example

  [{"name":"Beginner","id":"1"},{"name":"Expert","id":"3"}]
  */
});
