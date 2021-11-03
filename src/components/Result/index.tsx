import { Result } from 'antd';
import React from 'react';

type Status = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500';

type Props = {
  extra: React.ReactNode;
  status: Status;
  subtitle: string;
  title: string;
};

const CustomResult = (props: Props) => {
  return <Result {...props} />;
};

export default CustomResult;
