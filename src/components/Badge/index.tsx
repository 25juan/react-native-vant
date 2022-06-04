import { Text, View, ViewStyle } from 'react-native';
import * as React from 'react';
import useStyle from './styles';
import { bemObj, isNull, isNum } from '../../helper';

export interface IBadgeProps {
  // 徽标内容
  content?: string | number;
  // 徽标背景颜色
  color?: string;
  // 是否展示为小红点
  dot?: boolean;
  // 最大值，超过最大值会显示 {max}+，仅当 content 为数字时有效
  max?: number | string;
  // 设置徽标的偏移量，数组的两项分别对应水平和垂直方向的偏移量，默认单位为
  offset?: Array<[number | string, number | string]>;
  // 当 content 为数字 0 时，是否展示徽标
  showZero?: boolean;
  // 徽标位置，可选值为 top-left bottom-left bottom-right
  position?: 'top-left' | ' bottom-left ' | 'bottom-right' | 'top-right';
  style?: ViewStyle | Array<ViewStyle>;
}
const Badge: React.FC<IBadgeProps> = ({
  content = 0,
  dot = false,
  position = 'top-right',
  max = 99,
  offset = [],
  showZero = false,
  style,
}) => {
  const styles = useStyle();
  const [hDirection, yDirection] = position.split('-');
  let text: string | number = '';

  if (!isNull(content) && isNum(content)) {
    if (isNum(max)) {
      text = content > max ? max + '+' : content;
    }
  }

  const renderText = () =>
    dot ? null : <Text style={styles.badgeTextStyle}>{text}</Text>;
  const conditionStyle = bemObj(styles, { dot }) as Record<string, ViewStyle>;
  const [translateX = 4, translateY = -4] = offset;
  const badgeStyle = {
    [hDirection]: 0,
    [yDirection]: 0,
    transform: [{ translateX: translateX }, { translateY: translateY }],
  };
  if (!showZero && `${content}` === '0' && !dot) {
    return null;
  }
  return (
    <View
      style={[
        styles.badgeStyle,
        conditionStyle.dot,
        badgeStyle as ViewStyle,
        style,
      ]}
    >
      {renderText()}
    </View>
  );
};
export default Badge;
