import React, { useEffect, useState } from 'react';
import styles from './styles/Item.module.css';
import { Link } from 'react-router-dom';
import AddToCartDialog from './AddToCartDialog';

const ItemAdmin = ({ item, onCheck, onItemRender, onDelete }) => {
    // ...
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleDelete = () => {
    onDelete(item.id);
  };


  const handleCheck = (e) => {
    onCheck(item.id, e.target.checked);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    
    <div className={styles.item}>
      <div className={styles.itemImage}>
        <img src={item.cover} alt={item.name} />
      </div>
      <div className={styles.itemDetails}>
        <h3 className={styles.itemTitle}>
          <Link to={`/product/${item.id}`}>{item.name}</Link>
        </h3>
        <h4 className={styles.itemAuthor}>{item.author}</h4>
        <p className={styles.itemCategory}>{item.category}</p>
        <p className={styles.itemPrice}>{item.price.toFixed(2)} UAH</p>
        <div className={styles.itemCheckbox}>
        
    <div >
      
      <div className={styles.itemDetails}>
        
        <button className={styles.deleteButton} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
 
        </div>
        
        {isDialogOpen && (
          <AddToCartDialog
            productName={item.name}
            onClose={handleCloseDialog}   />
            )}
          </div>
        </div>
       
        );
        };
        export default ItemAdmin;