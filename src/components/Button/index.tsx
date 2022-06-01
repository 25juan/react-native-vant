import React from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import getStyles from './style';
import { bem } from '../helper';

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
}

const Button: React.FC<IButtonProps> = ({
  type = 'primary',
  size = 'normal',
  color,
  block = false,
  plain = false,
  square = false,
  round = true,
  disabled = false,
  hairline = false,

  text,
}) => {
  const styles = getStyles();
  const buttonStyle = bem(styles, 'buttonStyle', type, size, {
    block,
    plain,
    square,
    round,
    hairline,
  }) as Array<StyleProp<ViewStyle>>;
  const textStyle = { color };
  return (
    <TouchableOpacity style={buttonStyle} disabled={disabled}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
