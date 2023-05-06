import React from 'react';
import './Menu.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Menu = ({ isLoggedIn, onLoginLogout, categories, onCategoryChange }) => {
  return (
    <nav className="menu">
      {categories.map((category, index) => (
        <button
          key={index}
          className="menu-button"
          onClick={() => onCategoryChange(category)}
          >
          {category}
          </button>
          ))}
          {isLoggedIn ? (
          <LogoutButton onClick={onLoginLogout} />
          ) : (
          <LoginButton onClick={onLoginLogout} />
          )}
          </nav>
          );
          };
          export default Menu;