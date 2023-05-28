import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay, ModalContent } from './Modal.styled';

// #######################################

const modalRoot = document.querySelector('#modal-root');

// #######################################

export default class Modal extends Component {
  //
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = event => {
    if (event.code === 'Escape') {
      // console.log('Escape pressed');
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  // >>>>> Rendering

  render() {
    const { children } = this.props;
    const { handleBackdropClick } = this;

    return createPortal(
      <Overlay onClick={handleBackdropClick}>
        <ModalContent>{children}</ModalContent>
      </Overlay>,
      modalRoot
    );
  }
}

// ####### PropTypes ######################

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
