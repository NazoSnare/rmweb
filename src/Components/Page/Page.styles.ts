import styled from 'styled-components';

export const StyledPage = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props?.theme?.greyColor ?? 'grey'};
`;
