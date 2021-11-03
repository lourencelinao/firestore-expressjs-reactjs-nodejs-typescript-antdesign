import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';
import React from 'react';

type Props = InputProps & {
  defaultValue?: string;
};

const CustomInput = (props: Props) => {
  return <Input {...props} />;
};

export default CustomInput;
