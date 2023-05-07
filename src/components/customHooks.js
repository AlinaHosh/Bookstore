import { useState, useEffect } from 'react';

export const useItems = (initialItems) => {
  const [items, setItems] = useState(initialItems);
  useEffect(() => {
    console.log('Items:', items);
  }, [items]);
  return [items, setItems];
};

export const useDisplayedItems = (initialDisplayedItems) => {
  const [displayedItems, setDisplayedItems] = useState(initialDisplayedItems);
  useEffect(() => {
    console.log('Displayed Items:', displayedItems);
  }, [displayedItems]);
  return [displayedItems, setDisplayedItems];
};

export const useShoppingList = (initialShoppingList) => {
  const [shoppingList, setShoppingList] = useState(initialShoppingList);
  useEffect(() => {
    console.log('Shopping List:', shoppingList);
  }, [shoppingList]);
  return [shoppingList, setShoppingList];
};