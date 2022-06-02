import React from 'react';
import { Button, Cell, ConfigProvider } from 'react-native-vant';
import { View } from 'react-native';

export default function App() {
  return (
    <ConfigProvider>
      <View style={{ flexDirection: 'row' }}>
        <Button onClick={() => console.log('111')} text="hello world" />
      </View>

      <Cell />
    </ConfigProvider>
  );
}
