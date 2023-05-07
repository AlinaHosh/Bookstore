import React, { useContext, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Details from './Details';
import UserHistoryContext from './UserHistoryContext';

function DetailsWrapper({ items, handleCommentSubmit }) {
  const { id } = useParams();

  const product = useMemo(() => {
    return items.find((item) => item.id === parseInt(id));
  }, [id, items]);

  const { userHistory, addUserHistoryEntry } = useContext(UserHistoryContext);

  const addUniqueEntry = (entry) => {
    if (!userHistory.includes(entry)) {
      addUserHistoryEntry(entry);
    }
  };

  useEffect(() => {
    if (product) {
      const newEntry = `Visited product: ${product.name}`;
      addUniqueEntry(newEntry);
    }
  }, [product, addUserHistoryEntry, userHistory]);

  return (
    <Details
      product={product}
      handleCommentSubmit={handleCommentSubmit}
    />
  );
}

export default DetailsWrapper;