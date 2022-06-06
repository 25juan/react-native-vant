import { Dimensions } from 'react-native';

const designWidth = 750;
const designHeight = 1334;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function getSpFontSize(size: number) {
  const scaleWidth = windowWidth / designWidth;
  const scaleHeight = windowHeight / designHeight;
  const screenScale = Math.min(scaleWidth, scaleHeight);
  return (size * screenScale) / 2;
}

export function getSpHeight(height: number) {
  return (height * windowHeight) / designHeight / 2;
}

export function getSpWidth(height: number) {
  return (height * windowWidth) / designWidth / 2;
}
/**
 * 校验是否是外部链接
 * @param {*} url 校验的地址
 * @returns Boolean
 */
export function isExternal(url: string) {
  const REGEX_HTTP_PREFIX = /^(http|https):\/\/.*/;
  return REGEX_HTTP_PREFIX.test(url);
}
