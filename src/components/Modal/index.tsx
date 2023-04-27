import React from 'react';
import PropTypes from 'prop-types';
import { ModalContent, ModalOverlay } from './styles';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: any;
}
  
const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
    if (!open) return null;
  
    return (
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContent>
      </ModalOverlay>
    );
};

export default Modal;