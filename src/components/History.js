import React, { useContext } from 'react';
import UserHistoryContext from '../components/UserHistoryContext';

function History() {
  const { userHistory } = useContext(UserHistoryContext);

  return (
    <div>
      <h2>User History</h2>
      {userHistory.length === 0 ? (
        <p>No history</p>
      ) : (
        <ul>
          {userHistory.map((entry, index) => (
              index % 2 !== 0 ?
            <li key={index}>{entry}</li>: null
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;
