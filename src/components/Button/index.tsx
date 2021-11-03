import { ButtonProps } from 'antd/lib/button';
import React from 'react';

import { StyledButton } from './styles';

type Props = Omit<ButtonProps, 'size' | 'type'> & {
  size?: any;
  type:
    | 'link'
    | 'text'
    | 'default'
    | 'secondary'
    | 'ghost'
    | 'dashed'
    | 'primary'
    | undefined
    | any;
};

const CustomButton = (props: Props) => {
  const { children, ...remainingProps } = props;

  return <StyledButton {...remainingProps}>{children}</StyledButton>;
};

export default CustomButton;
