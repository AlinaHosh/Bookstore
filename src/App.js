import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Menu from './components/Menu';
import DetailsWrapper from './components/DetailsWrapper';
import itemsData from './components/Data';
import Context from './components/Context';
import UserHistoryContext from './components/UserHistoryContext';

import { useItems, useDisplayedItems, useShoppingList } from './components/customHooks';

import History from './components/History';
import Debug from './components/Debug';
import AdminPage from './components/AdminPage';

function AppHeader({ itemCount, displayedItemCount }) {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <Header
        itemCount={itemCount}
        displayedItemCount={displayedItemCount}
      />
    );
  } else {
    return <Header />;
  }
}

function App() {
  const [items, setItems] = useItems(itemsData);
  const [displayedItems, setDisplayedItems] = useDisplayedItems(items);
  const [shoppingList, setShoppingList] = useShoppingList([]);
  const [categories] = useState(['All', 'Language', 'Science', 'Fiction','Comedy']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCategoryChange = useCallback((category) => {
    if (category === 'All') {
      setDisplayedItems(items);
    } else {
      setDisplayedItems(items.filter((item) => item.category === category));
    }
    setShoppingList([]); 
  }, [items]);

  const handleCheck = useCallback((id, isChecked) => {
    const item = items.find((item) => item.id === id);

    if (isChecked) {
      setShoppingList((prevShoppingList) => [...prevShoppingList, item]);
    } else {
      setShoppingList((prevShoppingList) =>
        prevShoppingList.filter((item) => item.id !== id)
      );
    }
  }, [items]);

  const handleLoginLogout = useCallback(() => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  }, []);

  const handleCommentSubmit = useCallback((productId, comment) => {
    console.log(`Product ID: ${productId}, Comment: ${comment}`);
    alert(`Your report: "${comment}" added successfully!`);
  }, []);
  const [renderedItemsCount, setRenderedItemsCount] = useState(0);

  const handleItemRender = useCallback(() => {
    setRenderedItemsCount((prevCount) => prevCount + 1);
  }, []);

  const [userHistory, setUserHistory] = useState([]);

  const addUserHistoryEntry = useCallback((entry) => {
    setUserHistory((prevUserHistory) => [...prevUserHistory, entry]);
  }, []);

  return (
    <div>
      <Router>
        <UserHistoryContext.Provider value={{ userHistory, addUserHistoryEntry }}>
          <AppHeader
            itemCount={shoppingList.length}
            displayedItemCount={displayedItems.length}
          />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Menu
                    isLoggedIn={isLoggedIn}
                    onLoginLogout={handleLoginLogout}
                    categories={categories}
                    onCategoryChange={handleCategoryChange}
                  />
                  <Body
                    items={displayedItems}
                    onCheck={handleCheck}
                    onItemRender={handleItemRender}
                  />
                </>
              }            />
              <Route
                path="/product/:id"
                element={
                  <DetailsWrapper
                    items={items}
                    handleCommentSubmit={handleCommentSubmit}
                  />
                }
              />
              <Route path="/history" element={<History />} />
              <Route path="/animated-list" element={<AdminPage />} />
            </Routes>
            <Debug />
            <Footer />
          </UserHistoryContext.Provider>
        </Router>
      </div>
    );
  }
  
  export default App;