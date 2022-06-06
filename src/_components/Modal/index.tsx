import React, { useState, useImperativeHandle, forwardRef } from 'react';
import {
  Modal as RNModal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Divider from '../Divider';
import { useTheme } from '../ThemeProvider';

export interface ModalRef {
  showModal: (props: VModalProps) => void;
  hideModal: (flag: boolean) => void;
}

export interface VModalProps {
  title?: string;
  content?: string;
  icon?: React.ReactNode;
  iconType?: 'success' | 'warning' | 'error';
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  confirmText?: string;
  cancelText?: string;
  confirmColor?: string;
  cancelColor?: string;
}
type Callback = (value: boolean) => void;
const defaultModalProps: VModalProps = {
  title: '提示',
  content: '',
  icon: null,
  iconType: 'success',
  showCancelButton: false,
  showConfirmButton: true,
  confirmText: '确认',
  cancelText: '取消',
  confirmColor: '#0077ff',
  cancelColor: '##606266',
};
// 此组件只提供api的调用方式
const Modal = forwardRef<VModalProps>((_props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [option, setOption] = useState<VModalProps>(defaultModalProps);
  const theme = useTheme();
  let _resolve: Callback = () => {};
  let _reject: Callback = () => {};
  const showModal = (params: VModalProps = defaultModalProps) => {
    return new Promise((resolve, reject) => {
      setOption({ ...defaultModalProps, ...params });
      setVisible(true);
      _resolve = resolve;
      _reject = reject;
    });
  };
  const hideModal = (flag: boolean) => {
    setOption({});
    setVisible(false);
    if (flag) {
      _resolve(flag);
    } else {
      _reject(flag);
    }
  };
  useImperativeHandle<VModalProps, ModalRef & VModalProps>(ref, () => ({
    showModal,
    hideModal,
  }));
  return (
    <RNModal
      visible={visible}
      transparent={true}
      onRequestClose={() => {}}
      animationType="fade"
    >
      <View style={styles.mask}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{option.title}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>{option.content}</Text>
          </View>
          <Divider />
          <View style={styles.footer}>
            {option.showCancelButton ? (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => hideModal(false)}
                style={[
                  styles.button,
                  styles.cancel,
                  { borderRightColor: theme.colors.border },
                ]}
              >
                <Text
                  style={[styles.buttonText, { color: theme.colors.black }]}
                >
                  {option.cancelText}
                </Text>
              </TouchableOpacity>
            ) : null}
            {option.showConfirmButton ? (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => hideModal(true)}
                style={[styles.button, styles.confirm]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: theme.colors.primary, fontWeight: 'bold' },
                  ]}
                >
                  {option.confirmText}
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
    </RNModal>
  );
});

const styles = StyleSheet.create({
  mask: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  modal: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 18,
  },
  footer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonText: {
    fontSize: 16,
  },
  cancel: {
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  confirm: {},
});
export default Modal;
