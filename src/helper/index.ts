export function isExternal(link: string): boolean {
  return `${link || ''}`.startsWith('https://' || 'https://');
}

export function isNum(num: number | string) {
  return !isNaN(+num);
}

export function isNull(param: unknown) {
  return param === null || param === undefined;
}

import classNames, { Argument } from 'classnames';

export function bem(styles: Record<string, unknown>, ...args: Array<Argument>) {
  const classnames = classNames(...args);
  if (!classnames) {
    return [];
  }
  return classnames.split(' ').map((key: string) => styles[key]);
}

export function bemObj(
  styles: Record<string, unknown>,
  ...args: Array<Argument>
) {
  const classnames = classNames(...args);
  if (!classnames) {
    return {};
  }
  const filterStyle: Record<string, unknown> = {};
  classnames.split(' ').forEach((key) => {
    filterStyle[key] = styles[key];
  });
  return filterStyle;
}
