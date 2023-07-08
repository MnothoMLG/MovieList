import React, { FC } from 'react';
import Modal from 'react-modal';
import { ColorRing } from 'react-loader-spinner';
import { useLoading } from '../../hooks';
import { SIGN_UP_LOADING_KEY } from '../../store/auth/actions';

export const LoadingOverlay: FC<React.HTMLProps<HTMLParagraphElement>> = (
  props
) => {
  const loading = useLoading(SIGN_UP_LOADING_KEY);

  console.log('modal', { loading });
  return (
    <Modal
      isOpen={loading}
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
