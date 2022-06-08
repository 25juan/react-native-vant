import type {
  ViewProps as RNViewProps,
  StyleProp,
  ViewStyle,
  Animated,
} from 'react-native';
import type { ReactElement } from 'react';

export interface ViewProps extends Omit<RNViewProps, 'style'> {
  /**
   * 是否开启安全区适配, 为 true 时使用 SafeAreaView
   */
  useSafeArea?: boolean;
  /**
   * 是否使用 Animate.View
   */
  animated?: boolean;
  children?: ReactElement | Array<ReactElement>;
  style?: StyleProp<ViewStyle | Animated.AnimatedProps<ViewStyle>>;
}
