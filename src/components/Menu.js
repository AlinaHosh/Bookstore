import React from 'react';
import styles from './styles/Menu.module.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Menu = ({ isLoggedIn, onLoginLogout, categories, onCategoryChange }) => {
  return (
    <nav className={styles.menu}>
      {categories.map((category, index) => (
        <button
          key={index}
          className={styles.menubutton}
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