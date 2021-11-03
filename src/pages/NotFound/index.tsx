import React from 'react';

import { CustomButton, CustomResult } from 'components';

import { PageWrapper } from './styles';

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <CustomResult
        status="404"
        title="404"
        subtitle="Sorry, the page you visited does not exist."
        extra={<CustomButton type="primary">Back Home</CustomButton>}
      />
    </PageWrapper>
  );
};

export default NotFoundPage;
