import { Form, message } from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';

import { CustomButton, CustomInput } from 'components';
import { TOO_MANY_REQUESTS, USER_NOT_FOUND, WRONG_PASSWORD } from 'constants/errorCodes';
import { auth } from 'firebase';
import { FormWrapper, PageWrapper } from 'pages/Login/styles';

const validateMessages = {
  required: '${name} is required!',
  types: {
    email: 'Email is in wrong format.',
  },
};

type LoginForm = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnFinish = async (values: LoginForm) => {
    setIsLoading(true);
    const { email, password } = values;

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      let errorMessage;

      if (error.code === USER_NOT_FOUND || error.code === WRONG_PASSWORD) {
        errorMessage = 'Incorrect login credentials.';
      } else if (error.code === TOO_MANY_REQUESTS) {
        errorMessage = 'Too many requests. Please try again later.';
      }

      message.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageWrapper>
      <FormWrapper>
        <Form
          form={form}
          labelCol={{ span: 8 }}
          onFinish={handleOnFinish}
          validateMessages={validateMessages}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <CustomInput size="large" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true }]}>
            <CustomInput size="large" type="password" />
          </Form.Item>
          <Form.Item>
            <CustomButton htmlType="submit" loading={isLoading} type="primary">
              Submit
            </CustomButton>
          </Form.Item>
        </Form>
      </FormWrapper>
    </PageWrapper>
  );
};

export default LoginPage;
