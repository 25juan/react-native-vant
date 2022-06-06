import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../ThemeProvider';

export const LEFT = 'left';
export const CENTER = 'center';
export const RIGHT = 'right';
export interface VDividerProps {
  dashed?: boolean;
  hairline?: boolean;
  contentPosition?: 'left' | 'center' | 'right';
}
const Divider: React.FC<VDividerProps> = ({
  contentPosition = 'center',
  hairline = true,
  dashed = false,
  children,
}) => {
  const theme = useTheme();
  const color = theme.colors.border;
  const lineStyle: Array<ViewStyle> = [
    styles.line,
    {
      borderColor: color,
      borderTopWidth: hairline ? StyleSheet.hairlineWidth : 1,
      height: 0,
      borderStyle: dashed ? 'dashed' : 'solid',
    },
  ];
  return (
    <View style={styles.divider}>
      {contentPosition === LEFT && children ? (
        <View style={styles.left}>{children}</View>
      ) : null}
      <View style={lineStyle} />
      {contentPosition === CENTER && children ? (
        <View style={styles.center}>{children}</View>
      ) : null}
      <View style={lineStyle} />
      {contentPosition === RIGHT && children ? (
        <View style={styles.right}>{children}</View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
  },
  left: {
    paddingRight: 6,
  },
  center: {
    paddingHorizontal: 6,
  },
  right: {
    paddingLeft: 6,
  },
});
export default Divider;
