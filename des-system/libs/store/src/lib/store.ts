import { configureStore } from "@reduxjs/toolkit";
import changeTheme from './theme.slice'

export const store = configureStore({
  reducer:{
    changeTheme
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;