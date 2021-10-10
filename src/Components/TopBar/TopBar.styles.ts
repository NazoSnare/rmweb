import styled from 'styled-components';

export const StyledTopBar = styled.div`
  min-height: 79px;
  padding: 0px 105px;
  background-color: ${(props) => props?.theme?.rmbBlack ?? 'grey'};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.div`
  width: 103px;
  height: 42px;
  background-image: url('/images/Group 11441.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
