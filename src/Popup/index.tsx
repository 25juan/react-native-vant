import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Dialog from './Dialog';
import Icon from '../Icon';
import { useThemeFactory } from '../Theme';
import { createStyle } from './style';
import type { PopupProps } from './type';

const Popup = (props: PopupProps): JSX.Element => {
  const {
    children,
    round,
    closeable,
    closeIcon = 'cross',
    closeIconPosition = 'top-right',
    position,
    onClose,
    visible,
    title,
    ...rest
  } = props;

  const { styles, theme } = useThemeFactory(createStyle, {
    closeIconPosition,
    position,
  });

  return (
    <Dialog {...rest} position={position} visible={visible} onClose={onClose}>
      <View style={[styles.wrapper, round && styles.round]}>
        {!!title && <Text style={styles.title}>{title}</Text>}
        {closeable && (
          <TouchableOpacity style={styles.icon} onPress={onClose}>
            <Icon
              name={closeIcon}
              size={theme.popup_close_icon_size}
              color={theme.popup_close_icon_color}
            />
          </TouchableOpacity>
        )}
        {children}
      </View>
    </Dialog>
  );
};

export default Popup;