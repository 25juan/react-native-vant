import React, { useContext, useState } from 'react';
import {
  ConfigProviderContext,
  defaultConfig,
  IConfig,
  IThemeVars,
} from './context';

export interface IConfigProviderProps {
  themeVars?: IThemeVars;
}

const ConfigProvider: React.FC<IConfigProviderProps> = ({
  children,
  themeVars,
}) => {
  const [config] = useState<IConfig>(themeVars ? { themeVars } : defaultConfig);

  return (
    <ConfigProviderContext.Provider value={config}>
      {children}
    </ConfigProviderContext.Provider>
  );
};
export const useTheme = () => {
  return useContext(ConfigProviderContext).themeVars;
};
export default ConfigProvider;
