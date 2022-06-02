import classNames, { Argument } from 'classnames';

export function bem(styles: Record<string, unknown>, ...args: Array<Argument>) {
  const classnames = classNames(...args);
  if (!classnames) {
    return [];
  }
  return classnames.split(' ').map((key: string) => styles[key]);
}
