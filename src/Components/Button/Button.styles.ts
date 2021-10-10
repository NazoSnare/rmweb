import styled from 'styled-components';
import {ButtonProps} from './Button';

export const StyledButton = styled.button<ButtonProps>`
  text-transform: uppercase;
  padding: 6px;
  outline: none;
  cursor: pointer;
  border: none;
  margin: ${(props) => props.margin ?? '6px'};
  border-radius: 3px;
  font-weight: bold;
  font-size: 16px;
  width: ${(props) => props.width ?? ''};
  background-color: ${(props) =>
    props.isOutline ? 'transparent' : props.theme?.primaryColor ?? '#FA9D1E'};
  border: ${(props) =>
    props.isOutline && `1px solid ${props.theme?.primaryColor ?? '#FA9D1E'}`};
`;
