import React from 'react';
import {StyledButton} from './Button.styles';

export interface ButtonProps {
  /** the value that will be seen on the button */
  title: string;
  isOutline?: boolean;
  margin?: string;
  width?: string;
  ref?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title = 'untitled',
  className,
  isOutline,
  margin,
  width,
}) => {
  return (
    <StyledButton
      margin={margin}
      width={width}
      title={title}
      isOutline={isOutline}
      className={className}>
      {title}
    </StyledButton>
  );
};

export default Button;
