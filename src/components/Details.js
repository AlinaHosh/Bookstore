import React, { Component } from 'react';
import styles from './styles/Details.module.css';
import CurrencyConverter from './CurrencyConverter';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleCommentSubmit(this.props.product.id, this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    const { product } = this.props;
    const exchangeRate = 0.024;

    return (
      <div class="bodyadmin">
      <div className={styles.productdetails}>
        <div class={styles.det}>
        <img src={product.cover} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.author}</p>
        <CurrencyConverter amount={product.price} rate={exchangeRate} currency="EUR" />
        </div>
        <div class={styles.det}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="comment">Add a comment:</label>
          <textarea
            id="comment"
            value={this.state.comment}
            onChange={this.handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
      </div>
    );
  }
}

export default Details;