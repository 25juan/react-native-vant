import React  from 'react';
import {
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';

export interface VIconProps {
  icon: string | number;
  size?: number | keyof typeof sizeStyles;
  color?: string;
  mode?: ImageResizeMode;
  style?: ImageStyle | Array<ImageStyle>;
}
const Icon: React.FC<VIconProps> = ({
  icon,
  size = 'normal',
  color,
  mode = 'contain',
  style = {},
}) => {
  let styles: Array<ImageStyle> = [{ tintColor: color }];
  let source = icon === 'number' ? icon : { uri: icon };
  const sizeStyle =
    typeof size === 'number'
      ? {
          width: parseInt(`${size}`, 10),
          height: parseInt(`${size}`, 10),
        }
      : sizeStyles[size];

  styles.push(sizeStyle);
  styles = Array.isArray(style) ? [...styles, ...style] : [...styles, style];
  return (
    <Image
      source={source as ImageSourcePropType}
      style={styles}
      resizeMode={mode}
    />
  );
};
const sizeStyles = {
  large: {
    width: 32,
    height: 32,
  },
  normal: {
    width: 24,
    height: 24,
  },
  mini: {
    width: 16,
    height: 16,
  },
};

export default Icon;
