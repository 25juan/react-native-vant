import React from 'react';
import type { ColorSchemeName } from 'react-native';
import type { lightTheme } from './style/vars';

export interface GlobalState {
  themeMode: ColorSchemeName;
  isDarkMode: boolean;
  themeVars: typeof lightTheme;
}

export const GlobalContext = React.createContext<GlobalState>({} as GlobalState);
