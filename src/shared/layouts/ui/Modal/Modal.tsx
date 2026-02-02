import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    // Создаем элемент modal-root, если его нет
    const element = document.createElement('div');
    element.id = 'modal-root';
    document.body.appendChild(element);
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose}>Закрыть</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};

export default Modal;