import { StyleSheet } from 'react-native';
import { useTheme } from '../ConfigProvider';

export default () => {
  const themeVars = useTheme();
  return StyleSheet.create({
    buttonStyle: {
      width: 200,
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    primary: {
      backgroundColor: themeVars.vanBlue,
    },
    success: {
      backgroundColor: themeVars.vanGreen,
    },
    warning: {
      backgroundColor: themeVars.vanOrange,
    },
    danger: {
      backgroundColor: themeVars.vanRed,
    },
    square: {
      borderRadius: 0,
    },
    round: {
      borderRadius: themeVars.vanBorderRadiusLG,
    },
  });
};
