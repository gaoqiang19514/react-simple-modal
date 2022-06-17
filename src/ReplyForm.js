import React from 'react';
import { Button, Input } from 'antd';

function ReplyForm(props) {
  const { id, closeModal } = props;

  const onSubmit = () => {
    closeModal();
  };

  return (
    <>
      <h1>ReplyForm </h1>
      id：{id}
      <Input />
      <Button type="primary" onClick={onSubmit}>
        submit
      </Button>
    </>
  );
}

export default ReplyForm;
