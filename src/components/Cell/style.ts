import { useTheme } from '../ConfigProvider';
import { StyleSheet } from 'react-native';

export const useConditionStyle = () => {
  const themeVars = useTheme();
  return StyleSheet.create({
    center: {
      alignItems: 'center',
    },
    border: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: themeVars.vanGray3,
      borderStyle: 'solid',
    },
  });
};
export default () => {
  const themeVars = useTheme();
  return StyleSheet.create({
    cellStyle: {
      flexDirection: 'row',
      paddingHorizontal: themeVars.vanPaddingMD,
      paddingVertical: themeVars.vanPaddingSM,
      backgroundColor: themeVars.vanWhite,
    },
    leftStyle: {},
    centerStyle: {
      flex: 1,
    },
    titleStyle: {
      fontSize: themeVars.vanFontSizeMD,
      color: themeVars.vanGray8,
    },
    labelStyle: {
      fontSize: themeVars.vanFontSizeSM,
      color: themeVars.vanGray6,
    },
    rightStyle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    valueStyle: {
      fontSize: themeVars.vanFontSizeMD,
      color: themeVars.vanGray6,
    },
    requiredStyle: {
      fontSize: themeVars.vanFontSizeMD,
      color: themeVars.vanRed,
    }

  });
};
