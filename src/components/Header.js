import React from 'react';
import styles from './styles/Header.module.css';

const Header = ({ itemCount, displayedItemCount }) => {
  return (
    <header className={styles.header}>
      <h1>Bookstore Thalia</h1>
      <div>
        <span className={styles.itemcount}>Books in the cart: {itemCount}</span>
        <span className="displayed-itemcount">
          All books: {displayedItemCount}
        </span>
      </div>
    </header>
  );
};

export default Header;