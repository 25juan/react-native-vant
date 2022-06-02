import { useTheme } from '../ConfigProvider';

export default () => {
  const themeVars = useTheme();
  return {
    default: {
      plain: {
        buttonStyle: {
          borderColor: themeVars.vanGray3,
          borderStyle: 'solid',
          borderWidth: themeVars.vanBorderWidthBase,
          backgroundColor: themeVars.vanWhite,
        },
        textStyle: {
          color: themeVars.vanGray8,
        },
      },
      default: {
        buttonStyle: {
          borderColor: themeVars.vanGray3,
          borderStyle: 'solid',
          borderWidth: themeVars.vanBorderWidthBase,
          backgroundColor: themeVars.vanWhite,
        },
        textStyle: {
          color: themeVars.vanGray8,
        },
      },
    },
    primary: {
      plain: {
        buttonStyle: {
          borderColor: themeVars.vanBlue,
          borderStyle: 'solid',
          borderWidth: themeVars.vanBorderWidthBase,
        },
        textStyle: {
          color: themeVars.vanBlue,
        },
      },
      default: {
        buttonStyle: {
          backgroundColor: themeVars.vanBlue,
        },
        textStyle: {
          color: themeVars.vanWhite,
        },
      },
    },
    success: {
      plain: {
        buttonStyle: {
          borderColor: themeVars.vanGreen,
          borderStyle: 'solid',
          borderWidth: themeVars.vanBorderWidthBase,
        },
        textStyle: {
          color: themeVars.vanGreen,
        },
      },
      default: {
        buttonStyle: {
          backgroundColor: themeVars.vanGreen,
        },
        textStyle: {
          color: themeVars.vanWhite,
        },
      },
    },
    warning: {
      plain: {
        buttonStyle: {
          borderColor: themeVars.vanOrange,
          borderStyle: 'solid',
          borderWidth: themeVars.vanBorderWidthBase,
        },
        textStyle: {
          color: themeVars.vanOrange,
        },
      },
      default: {
        buttonStyle: {
          backgroundColor: themeVars.vanOrange,
        },
        textStyle: {
          color: themeVars.vanWhite,
        },
      },
    },
    danger: {
      plain: {
        buttonStyle: {
          borderColor: themeVars.vanRed,
          borderStyle: 'solid',
          borderWidth: themeVars.vanBorderWidthBase,
        },
        textStyle: {
          color: themeVars.vanRed,
        },
      },
      default: {
        buttonStyle: {
          backgroundColor: themeVars.vanRed,
        },
        textStyle: {
          color: themeVars.vanWhite,
        },
      },
    },
    mini: {
      buttonStyle: {
        paddingHorizontal: themeVars.vanPaddingBase,
        height: 24,
      },
      textStyle: {
        fontSize: themeVars.vanFontSizeXS,
      },
      square: {
        borderRadius: themeVars.vanBorderRadiusSM,
      },
      round: {

        borderRadius: themeVars.vanBorderRadiusMax,
      },
    },
    small: {
      buttonStyle: {
        paddingHorizontal: themeVars.vanPaddingSM,
        height: 32,
      },
      textStyle: {
        fontSize: themeVars.vanFontSizeSM,
      },
      square: {
        borderRadius: themeVars.vanBorderRadiusSM,
      },
      round: {
        borderRadius: themeVars.vanBorderRadiusMax,
      },
    },
    normal: {
      buttonStyle: {
        paddingHorizontal: themeVars.vanPaddingMD,
        height: 44,
      },
      textStyle: {
        fontSize: themeVars.vanFontSizeMD,
      },
      square: {
        borderRadius: themeVars.vanBorderRadiusMD,
      },
      round: {
        borderRadius: themeVars.vanBorderRadiusMax,
      },
    },
    large: {
      buttonStyle: {
        paddingHorizontal: themeVars.vanPaddingLG,
        height: 48,
      },
      textStyle: {
        fontSize: themeVars.vanFontSizeLG,
      },
      square: {
        borderRadius: themeVars.vanBorderRadiusLG,
      },
      round: {
        borderRadius: themeVars.vanBorderRadiusMax,
      },
    },
  };
};
