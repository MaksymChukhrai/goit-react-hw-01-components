import PropTypes from 'prop-types';
import React from 'react';
import friends from '../data/friends.json';

const FriendList = () => {
    return (

      <ul className="friend-list">
        {friends.map((friend) => (
          <li key={friend.id} className="item">
            <span className={`status ${friend.isOnline ? 'online' : 'offline'}`}></span>
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    );
  };

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };

export default FriendList;