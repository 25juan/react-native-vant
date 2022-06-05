import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import useStyles, { useConditionStyle } from './style';
import { useTheme } from '../ConfigProvider';
import { bemObj } from '../../helper';
import Icon from '../Icon';

export interface ICellProps {
  // 左侧标题
  title?: string;
  // 右侧内容
  value?: string;
  // 标题下方的描述信息
  label?: string;
  // 单元格大小
  size?: 'large' | 'normal';
  // 左侧图标名称或图片链接
  icon?: string | number;
  // 是否显示内边框
  border?: boolean;
  // 是否展示右侧箭头
  isLink?: boolean;
  // 是否显示表单必填星号
  required?: boolean;
  // 是否使内容垂直居中
  center?: boolean;
  // 箭头方向
  arrowDirection?: 'left' | 'up' | 'down' | 'right';
  // 左侧标题额外样式
  titleStyle?: TextStyle | Array<TextStyle>;
  // 右侧内容额外类名
  valueStyle?: ViewStyle | Array<ViewStyle>;
  // 描述信息额外类名
  labelStyle?: ViewStyle | Array<ViewStyle>;
  style?: ViewStyle | Array<ViewStyle>;
  onClick?: () => void;
  onLongPress?: () => void;
}

const Cell: React.FC<ICellProps> = ({
  title,
  label,
  value,
  center,
  border,
  required,
  isLink = false,
  titleStyle,
  labelStyle,
  valueStyle,
  style,
  onClick,
  onLongPress,
}) => {
  const themeVars = useTheme();
  const styles = useStyles();
  const conditionStyles = useConditionStyle();
  const activeOpacity = onLongPress || onClick ? themeVars.vanActiveOpacity : 1;
  const cellConditionStyles = bemObj(conditionStyles, {
    center,
    border,
  });

  const renderRequired = () =>
    required ? <Text style={styles.requiredStyle}>*</Text> : null;
  const renderArrow = () =>
    isLink ? <Icon name="arrowRight" size="14" /> : null;
  return (
    <TouchableOpacity
      style={[
        styles.cellStyle,
        cellConditionStyles.border as ViewStyle,
        cellConditionStyles.center as ViewStyle,
        StyleSheet.flatten(style),
      ]}
      activeOpacity={activeOpacity}
    >
      {renderRequired()}
      <View style={styles.centerStyle}>
        <Text style={[styles.titleStyle, StyleSheet.flatten(titleStyle)]}>
          {title}
        </Text>
        <Text style={[styles.labelStyle, StyleSheet.flatten(labelStyle)]}>
          {label}
        </Text>
      </View>
      <View style={styles.rightStyle}>
        <Text style={[styles.valueStyle, StyleSheet.flatten(valueStyle)]}>
          {value}
        </Text>
        {renderArrow()}
      </View>
    </TouchableOpacity>
  );
};

export default Cell;
