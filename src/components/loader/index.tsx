import React, { FC } from 'react';
import Modal from 'react-modal';
import { ColorRing } from 'react-loader-spinner';

export const LoadingOverlay: FC<React.HTMLProps<HTMLParagraphElement>> = (
  props
) => {
  return (
    <Modal
      isOpen={true}
      // onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <ColorRing
        visible={true}
        height='80'
        width='80'
        ariaLabel='blocks-loading'
        wrapperStyle={{}}
        wrapperClass='blocks-wrapper'
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
      <input />
      <button>tab navigation</button>
      <button>stays</button>
      <button>inside</button>
      <button>the modal</button>
    </Modal>
  );
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
