import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import './components/FriendList/FriendList.css';
import './components/Profile/ProfileStyles.css';
import './components/Statistics/Statistics.css';
import './components/TransactionHistory/TransactionHistory.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
