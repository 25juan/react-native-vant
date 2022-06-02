import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

export interface ICellProps {
  title: string;
  value: string;
  label: string;
  size: 'large' | 'normal';
  icon: string | number;
  border: boolean;
  clickable: boolean;
  isLink: boolean;
  required: boolean;
  center: boolean;
  arrowDirection: 'left' | 'up' | 'down' | 'right';
  titleStyle: ViewStyle | Array<ViewStyle>;
  valueStyle: ViewStyle | Array<ViewStyle>;
  labelStyle: ViewStyle | Array<ViewStyle>;
}

const Cell: React.FC<ICellProps> = () => {
  return (
    <View style={styles.cellStyle}>
      <View />
      <Text>Cell组件</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cellStyle: {
    flexDirection: 'row',
  },
});

export default Cell;
