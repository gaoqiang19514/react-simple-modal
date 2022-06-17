import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

import './style.css';
import openModal from './simpleModal';
import ReplyForm from './ReplyForm';

export default function App() {
  const onOpen = () => {
    openModal(<ReplyForm id="1" />);
  };

  return (
    <div>
      <Button type="primary" onClick={onOpen}>
        open
      </Button>
    </div>
  );
}
