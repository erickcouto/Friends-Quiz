import {createSlice} from '@reduxjs/toolkit';
import {getDifficulties} from './service';
import {getQuestions} from './service';

const initialState = {
  error: false,
  loading: false,
};

export const GeneralSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    hideError: state => {
      state.error = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(getDifficulties.pending, (state, action) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    });
    builder.addCase(getDifficulties.fulfilled, (state, action) => {
      return {
        ...state,
        difficulties: action.payload,
        loading: false,
        error: false,
      };
    });
    builder.addCase(getDifficulties.rejected, (state, action) => {
      return {
        ...state,
        error: true,
        loading: false,
      };
    });
    builder.addCase(getQuestions.pending, (state, action) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    });
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      return {
        ...state,
        difficulties: action.payload,
        loading: false,
        error: false,
      };
    });
    builder.addCase(getQuestions.rejected, (state, action) => {
      return {
        ...state,
        error: true,
        loading: false,
      };
    });
  },
});

export const {cleanAll, hideError} = GeneralSlice.actions;

export default GeneralSlice.reducer;
