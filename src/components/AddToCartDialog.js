import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './styles/AddToCartDialog.module.css';

const AddToCartDialog = ({ productName, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <>
      <div className={styles.dialog} onClick={handleClose}></div>
      <CSSTransition in={isOpen} timeout={300} classNames={{ ...styles }}>
        <div className={styles.dialog}>
          <h2>Книга була додана до кошика</h2>
          <p>{productName} було додано до вашого кошика.</p>
          <button onClick={handleClose}>Продовжити покупки</button>
          <button onClick={handleClose}>Перейти до кошика</button>
        </div>
      </CSSTransition>
    </>
  );
};

export default AddToCartDialog;