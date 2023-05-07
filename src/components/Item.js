import React, { useEffect } from 'react';
import styles from './styles/Item.module.css';
import { Link } from 'react-router-dom';

const Item = ({ item, onCheck, onItemRender }) => {
  useEffect(() => {
    onItemRender();
  }, [onItemRender]);

  return (
    <div className={styles.item}>
      <div className="item-image">
        <img src={item.cover} alt={item.name} />
      </div>
      <div className="item-details">
      <h3 className={styles.itemTitle}>
          <Link to={`/product/${item.id}`}>{item.name}</Link>
        </h3>
        <h4 className="item-author">{item.author}</h4>
        <p className="item-category">{item.category}</p>
        <p className="item-price">{item.price.toFixed(2)} UAH</p>
        <div className="item-checkbox">
          <input
            type="checkbox"
            onChange={(e) => onCheck(item.id, e.target.checked)}
          />
          <span>Add to the cart</span>
        </div>
      </div>
    </div>
  );
};

export default Item;