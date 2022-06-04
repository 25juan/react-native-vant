import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import getStyles from './style';
import { useTheme } from '../ConfigProvider';
import { bem } from '../../helper';

export interface IButtonProps {
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'large' | 'small' | 'mini' | 'normal';
  text?: string;
  color?: string;
  icon?: string;
  block?: boolean;
  plain?: boolean;
  square?: boolean;
  round?: boolean;
  disabled?: boolean;
  hairline?: boolean;
  loading?: boolean;
  loadingText?: string;
  onClick?: () => void;
  onLongPress?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  type = 'primary',
  size = 'normal',
  color,
  block = false,
  plain = false,
  round = false,
  disabled = false,
  hairline = false,
  text,
  loading = false,
  loadingText,
  onClick,
  onLongPress,
}) => {
  const themeVars = useTheme();
  const styles = getStyles();
  const typeStyles = plain ? styles[type].plain : styles[type].default;
  const sizeStyles = styles[size];
  const shapeStyle = round ? sizeStyles.round : styles[size].square;
  const otherStyles = bem(commonStyles, {
    hairline,
    block,
    loading,
  }) as Array<ViewStyle>;

  return (
    <TouchableOpacity
      style={[
        commonStyles.buttonStyle,
        typeStyles.buttonStyle as ViewStyle,
        sizeStyles.buttonStyle,
        shapeStyle,
        ...otherStyles,
      ]}
      disabled={disabled || loading}
      activeOpacity={themeVars.vanActiveOpacity}
      onPress={onClick}
      onLongPress={onLongPress}
    >
      <Text
        style={[
          commonStyles.textStyle,
          typeStyles.textStyle,
          sizeStyles.textStyle,
          color ? { color } : {},
        ]}
      >
        {loading && loadingText ? loadingText : text}
      </Text>
    </TouchableOpacity>
  );
};

const commonStyles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {},
  block: {
    width: '100%',
  },
  hairline: {
    borderWidth: StyleSheet.hairlineWidth,
  },
  loading: {
    opacity: 0.8,
  },
});
export default Button;
