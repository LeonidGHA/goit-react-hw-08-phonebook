import css from './Modal.module.scss';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const modal = document.querySelector('#modal');

function Modal({ onClick, children }) {
  useEffect(() => {
    document.addEventListener('keydown', onEscClose);

    return () => {
      document.removeEventListener('keydown', onEscClose);
    };
  });

  const onEscClose = e => {
    if (e.code === 'Escape') {
      onClick();
    }
  };

  const backdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClick();
    }
  };
  return createPortal(
    <div className={css.backdrop} onClick={backdropClose}>
      <div className={css.modal}>{children}</div>
    </div>,
    modal
  );
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
