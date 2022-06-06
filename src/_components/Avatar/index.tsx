import React from 'react';
import Icon from '../Icon';
import type { ImageStyle } from 'react-native';

export interface VAvatarProps {
  icon: string | number;
  size?: number;
  style?: ImageStyle;
  borderColor?: string;
  shape?: 'square' | 'circle';
}
const Avatar: React.FC<VAvatarProps> = ({
  icon,
  borderColor = '#fff',
  size = 60,
  style = {},
  shape = 'circle',
}) => {
  let borderStyle: ImageStyle = {};
  if (borderColor) {
    borderStyle = {
      borderWidth: 2,
      borderColor,
    };
  }
  if (shape === 'square') {
    borderStyle.borderRadius = 6;
  } else {
    borderStyle.borderRadius = parseInt(`${size}`, 10);
  }
  return (
    <Icon mode="cover" size={size} style={[borderStyle, style]} icon={icon} />
  );
};
export default Avatar;
