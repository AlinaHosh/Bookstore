import React from 'react';
import { useParams } from 'react-router-dom';
import Details from './Details';

function DetailsWrapper({ items, handleCommentSubmit }) {
    const { id } = useParams();
    const product = items.find((item) => item.id === parseInt(id));
    return (
      <Details
        product={product}
        handleCommentSubmit={handleCommentSubmit}
      />
    );
  }

export default DetailsWrapper;