import {configureStore} from '@reduxjs/toolkit';
import gameReducer from '../Pages/Game/GameSlice';
import homeReducer from '../Pages/Home/HomeSlice';
import generalReducer from './GeneralSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    home: homeReducer,
    general: generalReducer,
  },
});
