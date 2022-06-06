import { useTheme } from '../ThemeProvider'
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

export interface StyleInterface {
  [key: string]: {
    [key: string]: ViewStyle | TextStyle | any
  }
}

const styles = {
  common: {
    text: {},
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  large: {
    button: {
      height: 50,
      paddingHorizontal: 16,
      minWidth: 160,
    },
    text: {
      fontSize: 18,
    },
  },
  normal: {
    button: {
      height: 32,
      paddingHorizontal: 16,
      minWidth: 120,
    },
    text: {
      fontSize: 14,
    },
  },
  mini: {
    button: {
      height: 28,
      paddingHorizontal: 16,
      minWidth: 100,
    },
    text: {
      fontSize: 12,
    },
  },
  square: {
    button: {
      borderRadius: 6,
    },
  },
  bold: {
    text: {
      fontWeight: 'bold',
    },
  },
  circle: {
    button: {
      borderRadius: 50,
    },
  },
}
function createPlainColor(backgroundColor: string, textColor: string) {
  return {
    button: {
      backgroundColor: backgroundColor,
      borderWidth: StyleSheet.hairlineWidth,
      borderStyle: 'solid',
      borderColor: textColor,
    },
    text: {
      color: textColor,
    },
  }
}
function createFillColor(backgroundColor: string, textColor: string) {
  return {
    button: {
      backgroundColor: backgroundColor,
    },
    text: {
      color: textColor,
    },
  }
}

export default function useStyles(): StyleInterface {
  const { colors } = useTheme()
  return {
    ...styles,
    disabled: {
      text: {
        color: colors.white,
      },
      button: {
        backgroundColor: colors.content,
        borderColor: colors.content,
      },
    },
    plain: {
      primary: createPlainColor(colors.white, colors.primary),
      warning: createPlainColor(colors.white, colors.warning),
      error: createPlainColor(colors.white, colors.error),
      success: createPlainColor(colors.white, colors.success),
    },
    fill: {
      primary: createFillColor(colors.primary, colors.white),
      warning: createFillColor(colors.warning, colors.white),
      error: createFillColor(colors.error, colors.white),
      success: createFillColor(colors.success, colors.white),
    },
  }
}
