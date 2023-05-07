import React from 'react';
//import styles from './styles/Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import { StyledHeader, ExtendedTitle as Title, Info, InfoText, Navigation } from './StyledHeader';

const Header = ({ itemCount, displayedItemCount }) => {
  return (
    <StyledHeader>
      <Link to="/">
      <h1>Bookstore Thalia</h1>
      </Link>
      <Navigation>
        <NavLink to="/history" activeClassName="active">History</NavLink>
        <NavLink to="/animated-list" activeClassName="active">Admin</NavLink>
      </Navigation>
      <Info>
      {itemCount !== undefined && displayedItemCount !== undefined && (
          <>
            <InfoText color="#333">Books in the cart: {itemCount}</InfoText>
            <InfoText color="#333">All books: {displayedItemCount}</InfoText>
          </>
        )}
      </Info>
    </StyledHeader>
  );
};

export default Header;