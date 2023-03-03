import styled , {css} from 'styled-components'
import { colors } from '../../../assets/styles/colors'
import { theme } from '../../../assets/styles/theme'
import { pxToRem } from '../../../utils/styled'

const spreadMixin = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const centerMixin = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderWrap = styled.header`
  height: ${pxToRem(50)};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
`

export const HeaderNav = styled.nav`
  ${props => props.hasId ? centerMixin : spreadMixin}
  background-color: ${colors.orange[20]};
  height: 100%;
  padding: ${theme.spacing[1]};
  width: 100%;
`

export const HeaderButtonBack = styled.label`
  color: ${colors.gray[70]};
  left: ${pxToRem(20)};
  position: absolute;

  &:hover {
    color: ${colors.gray[0]};
    cursor: pointer;
  }
`

export const HeaderImage = styled.img`
  height: ${pxToRem(40)};
  max-height: 100%;  
  max-width: 100%;
  padding: ${theme.spacing[1]};
`

