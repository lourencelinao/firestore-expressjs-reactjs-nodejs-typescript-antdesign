import { Spin } from 'antd';
import React from 'react';

import { PageWrapper } from './styles';

const Loading = () => {
  return (
    <PageWrapper>
      <Spin size="large" />
    </PageWrapper>
  );
};

export default Loading;
