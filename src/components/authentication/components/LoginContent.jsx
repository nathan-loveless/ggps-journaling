import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { loginSubmit } from '../../../state/actions/actions';
import { Auth } from 'aws-amplify';

import '../../../antd/styles/signupContent.css';

const layout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 10
  }
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const LoginContent = props => {
  const onFinish = data => {
    props.loginSubmit(data, props);
  };

  return (
    <Form
      {...layout}
      layout="vertical"
      name="sign-in"
      onFinish={onFinish}
      onSubmit={e => e.preventDefault()}
      className="signup-form"
    >
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: 'Please type in a username'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please type a password'
          }
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = state => ({});

export default withRouter(
  connect(mapStateToProps, { loginSubmit })(LoginContent)
);
