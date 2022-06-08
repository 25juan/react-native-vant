import color from 'color';

const getContrastingColor = (
  input: string,
  light: string,
  dark: string
): string => {
  if (typeof input === 'string') {
    return color(input).isLight() ? dark : light;
  }

  return light;
};

export default getContrastingColor;
