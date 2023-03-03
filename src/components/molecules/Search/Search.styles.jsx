import styled , {css} from "styled-components";
import { colors } from "../../../assets/styles/colors";
import { theme } from "../../../assets/styles/theme";
import { pxToRem } from "../../../utils/styled";

export const SearchWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`

export const SearchButton = styled.button`
    background-color: ${colors.gray[70]};
    border: none;
    height: ${pxToRem(35)};
    width: ${pxToRem(35)};
`

export const SearchImageWrapper = styled.img`
    padding: ${theme.spacing[1]};
    max-width: 100%;
`