import { colors } from './colors'

export const theme = {
  font: {
    family: 'Roboto, Arial',
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    sizes: {
      xxs: '0.625rem', // 10px
      xs: '0.750rem', // 12px
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.250rem', // 20px
      xl: '1.5rem', // 24px
      xxl: '2rem', // 32px
      xxxl: '2.5rem', // 40px
      hg: '3.5rem' // 48px
    }
  },
  spacing: {
    px: '0.063rem',
    0: '0',
    0.25: '0.125rem',
    0.5: '0.250rem',
    1: '0.5rem',
    2: '1rem',
    3: '1.5rem',
    4: '2rem',
    5: '2.5rem',
    6: '3rem',
    7: '3.5rem',
    8: '4rem',
    9: '4.5rem',
    10: '5rem',
    11: '5.5rem',
    12: '6rem',
    13: '6.5rem',
    14: '7rem'
  },
  colors: {
    brand: {
      light: colors.orange[0],
      medium: colors.orange[10]
    },
    success: {
      light: colors.green[70],
      medium: colors.green[40],
      dark: colors.green[20]
    },
    warning: {
      light: colors.yellow[70],
      medium: colors.yellow[50],
      dark: colors.yellow[30]
    },
    error: {
      light: colors.red[70],
      medium: colors.red[50],
      dark: colors.red[30]
    },
  }
}

