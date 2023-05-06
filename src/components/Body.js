import React from 'react';
import './Body.css';
import Item from './Item';

const Body = ({ items, onCheck, onItemRender }) => {
  return (
    <div className="body">
      {items.map((item) => (
        <Item key={item.id} item={item} onCheck={onCheck} onItemRender={onItemRender} />
      ))}
    </div>
  );
};

export default Body;