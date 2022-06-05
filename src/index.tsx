import { NativeModules } from 'react-native';
import Button from './components/Button';
import Cell from './components/Cell';
import Icon from './components/Icon';
import Badge from './components/Badge';
import ConfigProvider from './components/ConfigProvider';
import { registerIcons } from './helper';

export { Button, Cell, ConfigProvider, Icon, Badge, registerIcons };
export default NativeModules.Vant;
