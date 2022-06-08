import React, { forwardRef } from 'react';
import { View, TouchableOpacity } from 'react-native';

import type { SwiperItemProps } from './type';

const SwiperItem = forwardRef<View, SwiperItemProps>((props) => {
  const { children, onPress, style, ...rest } = props;

  return (
    <TouchableOpacity onPress={onPress} style={style} {...rest}>
      {children}
    </TouchableOpacity>
  );
});

export default SwiperItem;
