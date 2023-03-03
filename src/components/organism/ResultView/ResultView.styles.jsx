import styled , {css} from 'styled-components'
import { colors } from '../../../assets/styles/colors'
import { theme } from '../../../assets/styles/theme'
import { getFontSize, pxToRem } from '../../../utils/styled'

const startMixin = css`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

/**
 * Header Custom
 */
export const ResultWrap = styled.section`
  ${startMixin}
  background-color: ${colors.gray[50]};
  height: ${pxToRem(40)};
  max-width: 100%;
  position: fixed;
  width: 100%;
  z-index: 999;
`

export const ResultFound = styled.div`
  align-items: center;
  color: ${colors.gray[30]};
  display: flex;
  height: ${pxToRem(40)};
  justify-content: flex-start;
  padding: 0 ${theme.spacing[1]};
`

export const FilterButton = styled.div`
  background-color: ${colors.gray[20]};
  height: ${pxToRem(40)};
  position: relative;
  width: ${pxToRem(40)};
`

export const FilterImage = styled.img`
    height: ${pxToRem(40)};
    object-fit: contain;
    width: ${pxToRem(40)};  
`

export const FilterMenu = styled.ul`
    background-color: ${colors.gray[20]};
    //display: none;
    list-style: none;
    margin-top: ${pxToRem(-5)};
    padding: 0;
    position: absolute;
    right: 0;
    width: ${pxToRem(200)};

    li{
        color: ${colors.gray[70]};
        font-size: ${getFontSize('xs')};
        font-weight: 300;
        padding: ${theme.spacing[2]};
        text-align: right;
        text-transform: uppercase;
    }
`

