import React, { Component } from 'react';

class Item extends Component {
  componentDidMount() {
    this.props.onItemRender();
  }
  render() {
    const { item, onCheck } = this.props;
    
    return (
      <div>
        <input
          type="checkbox"
          onChange={(e) => onCheck(item.id, e.target.checked)}
        />
        <span>{item.name}</span>
      </div>
    );
  }
}

export default Item;