import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Cell } from 'react-native-vant';

interface IMenuItemProps {
  title: string;
  path: string;
  icon: string | number;
}
const defaultMenus: Array<IMenuItemProps> = [
  {
    title: 'Button 按钮',
    icon: '',
    path: '',
  },
  {
    title: 'Badge 角标',
    icon: '',
    path: '',
  },
  {
    title: 'Icon 图标',
    icon: '',
    path: '',
  },
  {
    title: 'ConfigProvider 全局配置',
    icon: '',
    path: '',
  },
  {
    title: 'Cell 单元格',
    icon: '',
    path: '',
  },
];

const Component: React.FC<{}> = () => {
  const [components] = useState<Array<IMenuItemProps>>(defaultMenus);

  return (
    <FlatList
      data={components}
      renderItem={({ item }) => <Cell isLink border title={item.title} />}
    />
  );
};

export default Component;
