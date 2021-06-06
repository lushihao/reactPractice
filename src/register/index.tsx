import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import RegisterForm from './form';

export default function Login() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Register
      </Button>
      <Modal
        title="Register"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <RegisterForm />
      </Modal>
    </>
  );
};

