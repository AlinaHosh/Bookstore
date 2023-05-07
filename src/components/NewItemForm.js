import React, { useState } from 'react';
import styles from './styles/NewItemForm.module.css';

const NewItemForm = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState({
    id: '',
    name: '',
    author: '',
    category: '',
    cover: '',
    price: '',
  });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ ...newItem, id: parseInt(newItem.id), price: parseFloat(newItem.price) });
    setNewItem({
      id: '',
      name: '',
      author: '',
      category: '',
      cover: '',
      price: '',
    });
  };

  return (
   
    <form className={styles.newItemForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={newItem.name} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="author">Author:</label>
        <input type="text" name="author" id="author" value={newItem.author} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="category">Category:</label>
        <input type="text" name="category" id="category" value={newItem.category} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="price">Price:</label>
        <input type="number" step="0.01" name="price" id="price" value={newItem.price} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <button type="submit" className={styles.submitButton}>Add Item</button>
      </div>
    </form>
    
  );
};

export default NewItemForm;