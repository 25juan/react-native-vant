import { createContext } from 'react';

export const defaultConfig = {
  themeVars: {
    vanBlack: '#000',
    vanWhite: '#fff',
    vanGray1: '#f7f8fa',
    vanGray2: '#f2f3f5',
    vanGray3: '#ebedf0',
    vanGray4: '#dcdee0',
    vanGray5: '#c8c9cc',
    vanGray6: '#969799',
    vanGray7: '#646566',
    vanGray8: '#323233',
    vanRed: '#ee0a24',
    vanBlue: '#1989fa',
    vanOrange: '#ff976a',
    vanOrangeDark: '#ed6a0c',
    vanOrangeLight: '#fffbe8',
    vanGreen: '#07c160',
    vanGradientRed: ['#ff6034', '#ee0a24'],
    vanGradientOrange: ['#ffd01e', '#ff8917'],
    vanTextLinkColor: '#576b95',
    vanActiveOpacity: 0.6,
    vanDisabledOpacity: 0.5,
    vanPaddingBase: 4,
    vanPaddingXS: 8,
    vanPaddingSM: 12,
    vanPaddingMD: 16,
    vanPaddingLG: 24,
    vanPaddingXL: 32,
    vanFontSizeXS: 10,
    vanFontSizeSM: 12,
    vanFontSizeMD: 14,
    vanFontSizeLG: 16,
    vanFontWeightBold: 500,
    vanLineHeightXS: 14,
    vanLineHeightSM: 18,
    vanLineHeightMD: 20,
    vanLineHeightLG: 22,
    vanAnimationDurationBase: '0.3s',
    vanAnimationDurationFast: '0.2s',
    vanAnimationTimingFunctionEnter: 'ease-out',
    vanAnimationTimingFunctionLeave: 'ease-in',
    vanBorderWidthBase: 1,
    vanBorderRadiusSM: 2,
    vanBorderRadiusMD: 4,
    vanBorderRadiusLG: 8,
    vanBorderRadiusMax: 999,
  },
};
export type IThemeVars = typeof defaultConfig.themeVars;
export type IConfig = typeof defaultConfig;
export const ConfigProviderContext = createContext(defaultConfig);
