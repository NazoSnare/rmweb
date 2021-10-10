import styled from 'styled-components';

export const StyledFloatingSection = styled.div`
  background-color: transparent;
  min-height: 716px;
  height: 716px;
  position: relative;
  top: -80px;
`;

export const StyledJumbotron = styled.div`
  background-color: ${(props) => props.theme?.whiteColor};
  min-height: 588px;
  max-width: 1124px;
  margin: auto;
`;
