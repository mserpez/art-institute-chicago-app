const SIZE_VALUE = 8;

const theme = {
  colors: {
    primary: {main: '#2196f3', dark: '#1565c0', light: '#64b5f6'},
    textPrimary: '#444444',
    textSecondary: '#777777',
  },
  unit: (value: number) => value * SIZE_VALUE,
  radius: 3,
};

export default theme;
