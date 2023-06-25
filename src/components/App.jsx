import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

import userData from '../data/user.json';
import statisticData from '../data/data.json';
import friends from '../data/friends.json';
import items from '../data/transactions.json';

export const App = () => {
  return (
    <div className="app">
      <Profile {...userData} />
      <Statistics title="Upload stats" stats={statisticData} />
         <FriendList friends={friends} />
         <TransactionHistory items={items}/>
    </div>
  );
};

export default App;