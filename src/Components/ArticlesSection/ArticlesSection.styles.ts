import styled from 'styled-components';

export const StyledArticlesSection = styled.div`
  height: 133px;
  min-height: 133px;
  position: relative;
  top: -83px;
  display: flex;
  flex-direction: column;

  font-family: Arial, Helvetica, sans-serif;

  & .articles-heading {
    height: 78px;
    min-height: 69px;
  }
  & h1 {
    text-transform: capitalize;
    text-align: center;
    font-size: 42px;
    font-weight: normal;
  }

  & .articles {
    background-color: ${(props) => props.theme?.greyColor ?? '#f2f2f2'};
    min-height: 396px;
    display: flex;
    justify-content: center;
  }
`;
