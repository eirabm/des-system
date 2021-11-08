import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '..';

export interface ThemeState {
  isDark: boolean;
}

const initialState: ThemeState = {
  isDark: false
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers:{
    changeTheme(state) {
      state.isDark = !state.isDark;
    },
  }
})

export const { changeTheme } = themeSlice.actions;
export const getThemeSelector = (state: RootState) => state.changeTheme;
export default themeSlice.reducer;