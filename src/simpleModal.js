import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'antd';

function ModalWrap(props) {
  const { children, cleanModal } = props;

  const [visible, setVisible] = useState(true);

  const closeModal = () => {
    setVisible(false);
    setTimeout(() => {
      cleanModal();
    }, 300);
  };

  return (
    <Modal visible={visible} onCancel={closeModal} footer={null}>
      {React.cloneElement(children, { closeModal })}
    </Modal>
  );
}

let div = null;
function openModal(children) {
  const cleanModal = () => {
    if (div) {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
      div = null;
    }
  };

  if (!div) {
    div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(
      <ModalWrap cleanModal={cleanModal}>{children}</ModalWrap>,
      div
    );
  }
}

export default openModal;
