import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay, ModalContent } from './Modal.styled';

// #######################################

const modalRoot = document.querySelector('#modal-root');

// #######################################

export default function Modal({ onClose, children }) {
  //
  useEffect(() => {
    const handleKeydown = event => {
      if (event.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) onClose();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </Overlay>,
    modalRoot
  );
}

// ####### PropTypes ######################

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
