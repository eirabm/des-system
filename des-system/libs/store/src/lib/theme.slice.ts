import {createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

const initialState = false;

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers:{
    changeTheme: (state) => {
      state = !state;
    }
  }
})

export const { changeTheme } = themeSlice.actions;
export const getThemeSelector = (state: RootState) => state.changeTheme;
export default themeSlice.reducer;