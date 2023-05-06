import React from 'react';
import './Header.css';

const Header = ({ itemCount, displayedItemCount }) => {
  return (
    <header className="header">
      <h1>Bookstore Thalia</h1>
      <div>
        <span className="item-count">Books in the cart: {itemCount}</span>
        <span className="displayed-item-count">
          All books: {displayedItemCount}
        </span>
      </div>
    </header>
  );
};

export default Header;