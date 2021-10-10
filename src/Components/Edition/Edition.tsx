import React from 'react';
import {Button} from '../Button';
import {StyledEdHeading, StyledEdImage, StyledEdition} from './StyledEdition';

export interface EditionProps {
  className?: string;
  title: string;
  image: string;
  downloadLink?: string;
}

const Edition: React.FC<EditionProps> = ({
  className,
  title,
  image,
  downloadLink,
}) => {
  return (
    <StyledEdition>
      <StyledEdHeading>{title}</StyledEdHeading>
      <StyledEdImage />
      <Button margin="0px" width="184px" isOutline title={'Download pdf'} />
    </StyledEdition>
  );
};

export default Edition;
