import React from 'react';
import { Text, View } from 'react-native';

export interface IButtonProps {}

const Button: React.FC<IButtonProps> = () => {
  return (
    <View>
      <Text>Cell组件</Text>
    </View>
  );
};
export default Button;
