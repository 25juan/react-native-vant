import React, { useContext } from 'react';
import defaultTheme, { ThemeInterface } from './theme';

const ThemeContext = React.createContext(defaultTheme);
ThemeContext.displayName = 'ThemeContext';

export type ProviderProps = { theme?: ThemeInterface };
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider: React.FC<ProviderProps> = ({
  theme = defaultTheme,
  ...props
}) => {
  return <ThemeContext.Provider value={theme} {...props} />;
};
export default ThemeProvider;
