import React from 'react';
import { Button, Cell, ConfigProvider, Badge, Icon } from 'react-native-vant';
import { View } from 'react-native';

export default function App() {
  return (
    <ConfigProvider>
      <View style={{ backgroundColor: '#f5f5f5', flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Button onClick={() => console.log('111')} text="hello world" />
        </View>
        <Cell title="单元格" label="我是描述信息" value="内容" />
        <Icon
          size={100}
          name="https://fastly.jsdelivr.net/npm/@vant/assets/logo.png"
          dot
        />
        <Badge content={100} />
      </View>
    </ConfigProvider>
  );
}
