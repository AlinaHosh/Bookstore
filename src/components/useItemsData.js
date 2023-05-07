import { useState } from 'react';
import itemsData from './Data';

const useItemsData = () => {
  const [items, setItems] = useState(itemsData);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return { items, addItem, removeItem };
};

export default useItemsData;