import type { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';
import type { ReactElement } from 'react';

export interface TouchableOpacityProps extends RNTouchableOpacityProps {
  children?: ReactElement | Array<ReactElement>;
  // 背景yanse
  backgroundColor?: string;
  // onPress 回调的节流时间，单位 ms
  throttleTime?: number;
  // 节流函数的参数
  throttleOptions?: { leading: boolean; trailing: boolean };
  // 按下时的背景颜色
  activeBackgroundColor?: string;
}
