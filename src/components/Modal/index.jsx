import {useRef, useEffect} from 'react';

import s from './style.module.css';
import cn from 'classnames';

const Modal = ({isOpen, title, children, onCloseModal}) => {
  const modalEl = useRef();

  const handleCloseModal = () => {
    onCloseModal && onCloseModal();
  };
  const handleClickRoot = (evt) => {
    if (!modalEl.current.contains(evt.target)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.querySelector('body').style.overflow = isOpen ? 'hidden' : null;
  }, [isOpen]);

  return (
    <div
      className={cn(s.root, {[s.open]: isOpen})}
      onClick={handleClickRoot}
    >
      <div
        ref={modalEl}
        className={s.modal}
      >
        <div className={s.head}>
          {title}
          <span
            className={s.btnClose}
            onClick={handleCloseModal}
          />
        </div>
        <div className={s.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;