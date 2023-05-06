import React, { Component } from 'react';
import './Item.css'; // Import a CSS file for the Item component
import { Link } from 'react-router-dom';

class Item extends Component {
  componentDidMount() {
    this.props.onItemRender();
  }
  render() {
    const { item, onCheck } = this.props;

    return (
      <div className="item">
        <div className="item-image">
          <img src={item.cover} alt={item.name} />
        </div>
        <div className="item-details">
          <h3 className="item-title">
            <Link to={`/product/${item.id}`}>{item.name}</Link>
          </h3>
          <h4 className="item-author">{item.author}</h4>
          <p className="item-category">{item.category}</p>
          <p className="item-price">{item.price.toFixed(2)} EUR</p>
          <div className="item-checkbox">
            <input
              type="checkbox"
              onChange={(e) => onCheck(item.id, e.target.checked)}
            />
            <span>Add to the Cart</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;