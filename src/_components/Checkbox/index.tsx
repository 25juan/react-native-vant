import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from '../Icon';

export interface VCheckboxProps {
  title?: string;
  disabled?: boolean;
  checked?: boolean;
  // type?: 'primary' | 'error' | 'warning' | 'success'
  size?: 'large' | 'normal' | 'mini';
  onChange?: (checked: boolean) => void;
}
const Checkbox: React.FC<VCheckboxProps> = ({
  title,
  checked = false,
  disabled = false,
  onChange = () => {},
}) => {
  // const theme = useTheme()
  const handlePress = useCallback(() => {
    onChange(!checked);
  }, [onChange, checked]);
  const checkPng = require('./check.png');
  const checkedPng = require('./checked.png');

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      onPress={handlePress}
      style={styles.container}
    >
      <Icon icon={checked ? checkedPng : checkPng} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 2,
  },
  title: {
    fontSize: 14,
  },
});
export default Checkbox;
