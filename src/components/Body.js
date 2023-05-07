import React from 'react';
import styles from './styles/Body.module.css';
import Item from './Item';

const Body = ({ items, onCheck, onItemRender }) => {
  return (
    <div className={styles.body}>
      {items.map((item) => (
        <Item key={item.id} item={item} onCheck={onCheck} onItemRender={onItemRender} />
      ))}
    </div>
  );
};

export default Body;