import styled from "styled-components";
import { getFontSize, getSpacing, pxToRem } from '../../utils/styled'
import { colors } from '../../assets/styles/colors'

export const BandsItem = styled.li`
    align-items: center;
    border-bottom: 1px solid ${colors.gray[60]};
    display: flex;
    min-height: ${pxToRem(70)};
    justify-content: flex-start;
    padding: ${pxToRem(20)};
`

export const BandList = styled.ul`    
  margin-top: ${pxToRem(40)};
  padding: 0 ${getSpacing("1")};
`

export const BandImage = styled.img`    
    border-radius: 50%;
    height: ${pxToRem(50)};
    margin-right: ${pxToRem(25)};
    object-fit: contain;
    width: ${pxToRem(50)};
`

export const BandDetails = styled.div`
    p {
        color: ${colors.gray[30]};
        font-size: ${getFontSize("xs")};
        text-transform: uppercase;
    }    
`