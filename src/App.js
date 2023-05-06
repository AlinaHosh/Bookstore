import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Menu from './components/Menu';

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Dutch teach book', category: 'Language' },
      { id: 2, name: 'Item The Witcher', category: 'Fiction' },
      { id: 3, name: 'Coralina', category: 'Fiction' },
      { id: 4, name: 'Mrs Harris goes to Paris', category: 'Comedy' },
      { id: 5, name: 'Unlocking the Universe', category: 'Science' },
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
        <Header itemCount={shoppingList.length} 
        displayedItemCount={displayedItems.length}
        />
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
        <Footer />
      </div>
    );
  }
}
export default App;