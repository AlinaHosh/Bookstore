import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, useLocation } from 'react-router-dom';

import { useParams } from 'react-router';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Menu from './components/Menu';
import CurrencyConverter from './components/CurrencyConverter';
import DetailsWrapper from './components/DetailsWrapper';    

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

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Dutch teach book', author: 'Kauderwelsch', category: 'Language', cover: '/1.jpg', price: 12},
      { id: 2, name: 'The Witcher',  author: 'Andrzey Sapkowski', category: 'Fiction', cover: '/2.jpg', price: 12},
      { id: 3, name: 'Coralina', author: 'Gaiman', category: 'Fiction', cover: '/3.jpg', price: 5 },
      { id: 4, name: 'Mrs Harris goes to Paris', author: 'Paul Gallico', category: 'Comedy', cover: '/4.jpg', price: 11 },
      { id: 5, name: 'Unlocking the Universe', author: 'Stephen & Lucy Hawking', category:'Science',cover: '/5.jpg', price: 14 },
    ],
    categories: ['Language', 'Science', 'Fiction','Comedy'],
    displayedItems: [],
    shoppingList: [],
    renderedItemsCount: 0,
    isLoggedIn: false,
  };

  handleItemRender = () => {
    this.setState((prevState) => ({
      renderedItemsCount: prevState.renderedItemsCount + 1,
    }));
  };

  componentDidMount() {
    this.setState({ displayedItems: this.state.items });
  }

  handleCheck = (id, isChecked) => {
    const { items, shoppingList } = this.state;
    const item = items.find((item) => item.id === id);

    if (isChecked) {
      this.setState({ shoppingList: [...shoppingList, item] });
    } else {
      this.setState({
        shoppingList: shoppingList.filter((item) => item.id !== id),
      });
    }
  };

  handleLoginLogout = () => {
    this.setState((prevState) => ({ isLoggedIn: !prevState.isLoggedIn }));
  };

  handleCommentSubmit = (productId, comment) => {
    console.log(
      `Product ID: ${productId}, Comment: ${comment}`
    );
    alert(`Your comment added successfully!`);
  };
  

  handleCategoryChange = (category) => {
    if (category === 'All') {
      this.setState({ displayedItems: this.state.items });
    } else {
      this.setState({
        displayedItems: this.state.items.filter(
          (item) => item.category === category
        ),
      });
    }
    this.setState({ shoppingList: [] }); 
  };

  render() {
    const { displayedItems, shoppingList, isLoggedIn, categories } = this.state;

    return (
      <div>
      <Router>
          <AppHeader
            itemCount={shoppingList.length}
            displayedItemCount={displayedItems.length}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
        <Menu
          isLoggedIn={isLoggedIn}
          onLoginLogout={this.handleLoginLogout}
          categories={categories}
          onCategoryChange={this.handleCategoryChange}
        />
         <Body
        items={displayedItems}
        onCheck={this.handleCheck}
        onItemRender={this.handleItemRender}
      />
             </>
              }
            />
             <Route
              path="/product/:id"
              element={
                <DetailsWrapper
                  items={this.state.items}
                  handleCommentSubmit={this.handleCommentSubmit}
                />
              }
            />
          </Routes>
        <Footer />
        </Router>
      </div>
    );
  }
}
export default App;