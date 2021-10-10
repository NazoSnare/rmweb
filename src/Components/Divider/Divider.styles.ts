import styled from 'styled-components';

export const StyledDivider = styled.div`
  background-color: red;
  min-height: 4px;
  display: flex;

  & .first-portion {
    background-color: ${(props) => props?.theme?.primaryColor ?? '#FA9D1E'};
    width: 30%;
  }

  & .second-portion {
    background-color: ${(props) => props?.theme?.whiteColor ?? '#FFFFFF'};
    flex: 1;
  }
`;
