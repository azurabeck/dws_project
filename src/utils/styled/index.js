import { css } from 'styled-components'

/**
 * Convert px to rem unit
 * @param { Number } valuePx - Value in px
 * @param { Number } [base=16] - Base value for calculation
 * @return { String } Value converted to rem. Ex: 75 rem
 */
export const pxToRem = (valuePx, base = 16) => {
  return `${valuePx / base}rem`
}


/**
 * Gets the value of the font-size in theme
 * @param { ('xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'hg') } propKey - Object key:
 *
 * xxs = 10px | xs = 12px, |  sm = 14px |  md = 16px | lg = 20px | xl = 24px | xxl = 32px | xxxl = 40px | hg = 48px
 *
 * @returns { String } - Selected value converted to rem
 */
export const getFontSize = (propKey) => {
  return ({ theme }) =>
    css`
      ${theme.font.sizes[propKey]}
    `
}

/**
 * Gets the value of the space in theme
 * @param { ('px' | '0' | '0.25' | '0.5' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14') } propKey - Object key:
 *
 * px = 1px | 0 = 0 | 0.25 = 2px | 0.5 = 4px | 1 =  8px | 2 = 16px | 3 = 24px | 4 = 32px | 5 =  40px | 6 = 48px | 7 =  56px | 8 = 64px | 9 = 72px | 10 = 80px | 11 = 88px | 12 = 96px | 13 = 104px | 14 = 112px
 *
 * @returns { String } - Selected value converted to rem
 */
export const getSpacing = (propKey) => {
  return ({ theme }) =>
    css`
      ${theme.spacing[propKey]}
    `
}
