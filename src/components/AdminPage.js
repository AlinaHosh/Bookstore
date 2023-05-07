import React, { useState } from 'react';
import AnimatedListPage from './AnimatedListPage';
import itemsData from './Data';

const AdminPage = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    console.log("Adding new book:", newItem); 
    setItems([...items, newItem]);
  };

  const handleDelete = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
   
    <AnimatedListPage onAddItem={handleAddItem} onDelete={handleDelete} items={items} />
  
    );
};

export default AdminPage;