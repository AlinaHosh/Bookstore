import { createContext } from 'react';

const UserHistoryContext = createContext({
  userHistory: [],
  addUserHistoryEntry: () => {},
});
export default UserHistoryContext;