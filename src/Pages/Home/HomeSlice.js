import {createSlice} from '@reduxjs/toolkit';
import {getDifficulties} from '../../Store/service';

const initialState = {
  difficulties: [],
};

export const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    cleanAll: state => {
      state.difficulties = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(getDifficulties.fulfilled, (state, action) => {
      return {
        ...state,
        difficulties: action.payload,
        loading: false,
      };
    });
    builder.addCase(getDifficulties.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
      };
    });
  },
});

export const {cleanAll} = HomeSlice.actions;

export default HomeSlice.reducer;
