import styled from 'styled-components';

export const StyledEditionsSections = styled.div`
  min-height: 1107px;
  height: 1107px;
  margin-top: 248px;
  padding: 120px;
  background-color: ${(props) => props.theme?.whiteColor ?? 'white'};
  color: ${(props) => props.theme.rmbBlack ?? '#0A0A0D'};
`;

export const Styledheading = styled.h1`
  font: normal normal normal 42px/48px Arial;
  letter-spacing: 0px;
  margin-bottom: 90px;
  text-align: center;
`;

export const StyledEditions = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
