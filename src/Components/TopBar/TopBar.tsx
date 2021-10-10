import React from 'react';
import {Button} from '..';
import {StyledLogo, StyledTopBar} from './TopBar.styles';

const TopBar: React.FC = () => {
  return (
    <StyledTopBar>
      <StyledLogo />
      <Button title="Request the report" />
    </StyledTopBar>
  );
};

export default TopBar;
