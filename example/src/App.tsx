import React from 'react';
import { Button, Cell, ConfigProvider } from 'react-native-vant';

export default function App() {
  return (
    <ConfigProvider>
      <Button text='hello world' />
      <Cell />
    </ConfigProvider>
  );
}
