import styled from 'styled-components';

export const StyledBanner = styled.div`
  min-height: 596px;
  background-color: transparent;
  background-image: url('/images/first-background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const StyledContent = styled.div`
  background-color: ${(props) => props?.theme?.secondaryColor ?? '#E5E5E5'};
  /* background-color: red; */
  min-height: 596px;
  min-width: 325px;
  max-width: 449px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 60px 0px 60px 105px;
  & .heading {
    margin-bottom: 40px;
    h1 {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 42px;
      letter-spacing: 0;
      display: table-caption;
    }
  }

  & .content {
    margin-bottom: 40px;
    font-size: 16px;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
    color: ${(props) => props.theme?.rmbBlack ?? '#0A0A0D'};
  }

  & .call-to-actions {
  }
`;

export const StyledNotice = styled.div`
  width: 12px;
  padding-left: 12px;
  background-image: url('/images/Mask Group 1.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  & h1 {
    margin-left: 21px;
  }
`;
