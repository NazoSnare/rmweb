import React from 'react';
import {StyledDivider} from './Divider.styles';

const Divider: React.FC = () => {
  return (
    <StyledDivider>
      <div className="first-portion"></div>
      <div className="second-portion"></div>
    </StyledDivider>
  );
};

export default Divider;
