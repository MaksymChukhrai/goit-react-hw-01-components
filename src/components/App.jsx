import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';

import statisticData from '../data/data.json';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <div className="app">
      <Profile />
      <Statistics title="Upload stats" stats={statisticData} />
   
      <FriendList friends={friends} />
    </div>
  );
};
