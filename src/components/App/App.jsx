import React from 'react';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import userData from '../../data/user.json';
import statisticData from '../../data/data.json';
import friends from '../../data/friends.json';
import items from '../../data/transactions.json';

export const App = () => {
  return (
    <div className="app">
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticData} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};

export default App;
