import {createSlice} from '@reduxjs/toolkit';
import {shuffle, slice} from 'lodash';
import {getQuestions} from '../../Store/service';

const initialState = {
  questions: [],
  actualQuestion: {},
  activeQuestion: 0,
  answeredQuestions: [],
  finalScore: 0,
  maxQuestions: 10,
};

export const GameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setActiveQuestion: (state, action) => {
      state.activeQuestion = action.payload;
    },
    setAnswer: (state, action) => {
      state.answeredQuestions = [...state.answeredQuestions, action.payload];
    },
    setActualQuestion: (state, action) => {
      state.actualQuestion = action.payload;
    },
    getFinalScore: state => {
      var score = 0;
      state.answeredQuestions.forEach(question => {
        if (question.answered.correct) {
          score++;
        }
      });
      state.finalScore = score;
    },
    cleanAll: state => {
      state.answeredQuestions = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      return {
        ...state,
        questions: shuffle(slice(action.payload, 0, state.maxQuestions)),
        actualQuestion: state.questions[0],
        loading: false,
      };
    });
    builder.addCase(getQuestions.rejected, state => {
      return {
        ...state,
        loading: false,
      };
    });
  },
});

export const {
  setActiveQuestion,
  setActualQuestion,
  setAnswer,
  cleanAll,
  getFinalScore,
} = GameSlice.actions;

export default GameSlice.reducer;
