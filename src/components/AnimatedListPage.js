import React from 'react';
import styles from './styles/Body.module.css';
import AnimatedList from './AnimatedList';
import NewItemForm from './NewItemForm';

const AnimatedListPage = ({ items, onAddItem, onDelete }) => {
  return (
    <div className={styles.body}>
      <AnimatedList items={items} addItem={onAddItem} removeItem={onDelete} />
      <NewItemForm onAddItem={onAddItem} />
    </div>
  );
};

export default AnimatedListPage;