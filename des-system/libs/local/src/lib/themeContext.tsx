import { createContext, ReactChild, ReactFragment, ReactPortal, useReducer } from "react";

export interface ThemeState {
  isDark: boolean;
}

export const initialState = {
  isDark: false,
};

export const ThemeContext = createContext<{
  state: ThemeState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});


export const themeReducer = (state: any, action: { type: any; }) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { isDark: false };
    case "DARKMODE":
      return { isDark: true };
    default:
      return state;
  }
};

export const ThemeProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      {children}
    </ThemeContext.Provider>
  )
}
