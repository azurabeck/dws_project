import styled , {css} from 'styled-components'
import { colors } from '../../../assets/styles/colors'
import { theme } from '../../../assets/styles/theme'
import { pxToRem } from '../../../utils/styled'

const spreadMixin = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

/**
 * Header Custom
 */
export const HeaderWrap = styled.header`
  height: ${pxToRem(50)};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
`

export const HeaderNav = styled.nav`
  ${spreadMixin}
  background-color: ${colors.orange[10]};
  height: 100%;
  padding: ${theme.spacing[1]};
  width: 100%;
`

export const HeaderImage = styled.img`
  max-height: 100%;  
  max-width: 100%;
  padding: ${theme.spacing[1]};
`