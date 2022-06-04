import { StyleSheet } from 'react-native';
import { useTheme } from '../ConfigProvider';

export default () => {
  const themVars = useTheme();
  return StyleSheet.create({
    badgeStyle: {
      position: 'absolute',
      backgroundColor: themVars.vanRed,
      borderRadius: 8,
      minWidth: 16,
      height: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dot: {
      minWidth: 8,
      width: 8,
      height: 8,
    },
    badgeTextStyle: {
      fontSize: 12,
      paddingHorizontal: 3,
      color: themVars.vanWhite,
    },
  });
};
