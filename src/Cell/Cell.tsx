import React, { forwardRef } from 'react';
import {
  Text,
  TouchableOpacity as RNTouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useMemoizedFn } from '../hooks';
import isFunction from 'lodash-es/isFunction';
import { useThemeFactory } from '../Theme';
import Icon from '../Icon';
import TouchableOpacity from '../TouchableOpacity';
import { createCellStyle } from './style';
import { CellProps, directionIcons } from './type';

const Cell = forwardRef<RNTouchableOpacity, CellProps>((props, ref) => {
  const {
    title,
    value,
    label,
    size = 'default',
    icon,
    isLink,
    arrowDirection = 'right',
    center,
    style,
    onPress,
    children,
    valueStyle,
    labelStyle,
    titleStyle,
  } = props;
  const isLarge = size === 'large';
  const { styles, theme } = useThemeFactory(createCellStyle);

  const renderLeftIcon = () => {
    let iconComponent: React.ReactNode;

    if (React.isValidElement(icon)) {
      iconComponent = React.cloneElement(icon, {
        // @ts-ignore
        size: theme.cell_icon_size,
        color: theme.cell_text_color,
      });
    } else if (icon) {
      iconComponent = (
        <Icon
          name={icon}
          size={theme.cell_icon_size}
          color={theme.cell_text_color}
        />
      );
    }

    if (iconComponent) {
      const iconStyle = { marginRight: 4 };
      return <View style={[styles.icon, iconStyle]}>{iconComponent}</View>;
    }
    return <></>;
  };

  const renderTitle = () => {
    if (title) {
      const titleStyles = [
        styles.title,
        isLarge && styles.titleLarge,
        titleStyle,
      ];
      const boxStyle: ViewStyle = { position: 'relative' };
      return (
        <View style={boxStyle}>
          {!!props.required && <Text style={styles.required}>*</Text>}
          {isFunction(title) ? (
            title(titleStyles)
          ) : (
            <Text style={titleStyles}>{title}</Text>
          )}
          {label && (
            <Text
              style={[styles.label, isLarge && styles.larbelLarge, labelStyle]}
            >
              {label}
            </Text>
          )}
        </View>
      );
    }
    return <></>;
  };

  const renderRightIcon = () => {
    if (isLink) {
      const iconStyle = { marginLeft: 4 };
      return (
        <View style={[styles.icon, iconStyle]}>
          <Icon
            name={directionIcons[arrowDirection]}
            size={theme.cell_icon_size}
            color={theme.cell_right_icon_color}
          />
        </View>
      );
    }
    return <></>;
  };
  const renderValue = useMemoizedFn(() => {
    const hasValue = !!children || !!value;

    if (React.isValidElement(children) || React.isValidElement(value)) {
      return (children || value) as React.ReactElement;
    }
    if (hasValue) {
      return (
        <Text style={[styles.value, valueStyle]}>{children ?? value}</Text>
      );
    }
    return <></>;
  });
  const touchableOpacityStyle: ViewStyle = center
    ? { alignItems: 'center' }
    : { alignItems: 'flex-start' };
  return (
    <TouchableOpacity
      ref={ref}
      onPress={onPress}
      activeBackgroundColor={theme.cell_active_color}
      style={[
        styles.wrapper,
        isLarge && styles.wrapperLarge,
        style,
        touchableOpacityStyle,
      ]}
    >
      {renderLeftIcon()}
      {renderTitle()}
      {renderValue()}
      {renderRightIcon()}
    </TouchableOpacity>
  );
});

Cell.displayName = 'Cell';

export default Cell;
