import type { TouchableOpacityProps } from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { ThemeVarType } from './styles';

export type $Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type $RemoveChildren<T extends React.ComponentType<any>> = $Omit<
  React.ComponentPropsWithoutRef<T>,
  'children'
>;

export type EllipsizeProp = 'head' | 'middle' | 'tail' | 'clip';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace DiceUI {
    type Theme = ThemeVarType;
  }
}

type Inline<T, K extends keyof T> = Partial<
  {
    /**
     * @default None
     * @type PressableProps except click handlers
     */
    pressableProps: Omit<T, K>;
  } & Pick<T, K>
>;

export type InlinePressableProps = Inline<
  TouchableOpacityProps,
  'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut'
>;
