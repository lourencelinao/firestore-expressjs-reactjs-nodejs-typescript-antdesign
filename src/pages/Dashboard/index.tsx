import { message } from 'antd';
import { signOut } from 'firebase/auth';
import React from 'react';

import { CustomButton } from 'components';
import { auth } from 'firebase';

const DashboardPage = () => {
  const handleOnClick = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      message.warning(error.message);
    }
  };

  return (
    <div>
      <CustomButton onClick={handleOnClick} type="primary">
        Sign out
      </CustomButton>
    </div>
  );
};

export default DashboardPage;
