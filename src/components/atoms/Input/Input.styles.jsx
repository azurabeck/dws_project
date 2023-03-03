import styled from 'styled-components'
import { getSpacing, pxToRem } from '../../../utils/styled';


export const InputContainer = styled.input`
  border: none;
  height: ${pxToRem(35)};
  outline: none;  
  padding: ${getSpacing('1')};
`
