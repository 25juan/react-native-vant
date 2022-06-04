import * as React from 'react';
import { Image, ImageStyle, TouchableOpacity } from 'react-native';
import * as assets from '../../assets';
import { useTheme } from '../ConfigProvider';
import { isExternal, isNum } from '../../helper';
import useStyles from './styles';
import Badge from '../Badge';

export interface IIconProps {
  name: string | number;
  dot?: boolean;
  badge?: number | string;
  color?: string;
  mode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  size?: number | string;
  onClick?: () => void;
  onLongPress?: () => void;
}

const defaultSize = 24;
const Icon: React.FC<IIconProps> = ({
  name,
  dot,
  badge,
  mode = 'cover',
  color,
  size = defaultSize,
  onClick,
  onLongPress,
}) => {
  const themVars = useTheme();
  const vanActiveOpacity =
    onClick || onLongPress ? themVars.vanActiveOpacity : 1;
  const tintColor = color || themVars.vanGray6;
  const iconSize = isNum(Number(size)) ? size : defaultSize;
  let source = null;
  if (typeof name === 'string') {
    source = isExternal(name)
      ? { uri: name }
      : (assets as Record<string, number>)[name];
  } else {
    source = name;
  }
  const sizeStyle = {
    width: +iconSize,
    height: +iconSize,
  };
  const iconStyle: ImageStyle = {
    ...sizeStyle,
    tintColor,
  };
  const renderDot = () => (dot ? <Badge dot /> : null);
  const renderBadge = () => (badge !== null || badge !== undefined ? <Badge content={badge} /> : null);
  const styles = useStyles();
  return (
    <TouchableOpacity
      style={[styles.iconStyle, sizeStyle]}
      onPress={onClick}
      onLongPress={onLongPress}
      activeOpacity={vanActiveOpacity}
    >
      <Image style={iconStyle} resizeMode={mode} source={source} />
      {renderBadge()}
      {renderDot()}
    </TouchableOpacity>
  );
};
export default Icon;
