import React, { useCallback } from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle, TextStyle,
} from 'react-native';
import useStyles from './useStyles';

export interface VButtonProps {
  title?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  type?: 'primary' | 'error' | 'warning' | 'success';
  size?: 'large' | 'normal' | 'mini';
  shape?: 'square' | 'circle';
  bold?: boolean;
  loading?: boolean;
  plain?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
}
const Button: React.FC<VButtonProps> = ({
  title,
  iconLeft,
  iconRight,
  disabled = false,
  type = 'primary',
  size = 'normal',
  shape = 'circle',
  bold = false,
  loading = false,
  plain = false,
  onPress = () => {},
  onLongPress = () => {},
}) => {
  const handlePress = useCallback(onPress, [onPress]);
  const handleLongPress = useCallback(onLongPress, [onLongPress]);
  const styles = useStyles();

  const sizeStyle = styles[size];
  const shapeStyle = styles[shape];
  let buttonStyle: Array<ViewStyle> = [];
  let textStyle: Array<TextStyle> = [];
  let typeStyles = styles.fill;
  if (plain) {
    typeStyles = styles.plain;
  }
  typeStyles = typeStyles[type];
  buttonStyle = [
    styles.common.button,
    typeStyles?.button,
    sizeStyle?.button,
    shapeStyle?.button,
  ];
  textStyle = [styles.common.text, typeStyles?.text, sizeStyle?.text];

  if (bold) {
    textStyle.push(styles.bold.text);
  }
  if (disabled) {
    buttonStyle.push(styles.disabled.button);
    textStyle.push(styles.disabled.text);
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={buttonStyle}
      disabled={disabled || loading}
      onPress={handlePress}
      onLongPress={handleLongPress}
    >
      {loading ? <ActivityIndicator color="#fff" /> : null}
      {iconLeft}
      <Text style={textStyle}>{title}</Text>
      {iconRight}
    </TouchableOpacity>
  );
};
export default Button;
