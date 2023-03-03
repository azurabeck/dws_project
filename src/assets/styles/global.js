import styled, { createGlobalStyle, css } from 'styled-components';
import { getSpacing, pxToRem } from '../../utils/styled'
import { colors } from './colors'
import { theme } from './theme'

const absoluteFullMixin = css`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`


export const GlobalStyles = createGlobalStyle`
  ${() => css`
    * {
      margin: 0;
      outline: none;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html,
    body,
    #root {
      ${absoluteFullMixin}
    }

    body {
      font-family: ${theme.font.family};
      scroll-behavior: smooth;
      line-height: 1.2;
      background-color: ${colors.gray[80]};
      color: ${colors.gray[20]};
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    button.no-style {
      background: transparent;
      border: none;
      outline: none;

      &:hover {
        cursor: pointer;
      }
    }
  `}
`;

export const Container = styled.div`
  ${absoluteFullMixin}
  margin-top: ${pxToRem(50)};
`