import React from 'react';
import userAvatar from '../assets/img/user.png';

const Post = () => {
  return (
    <li className="profile__post-item">
      <span className="profile__post-avatar">
        <img width="40px" src={userAvatar} alt="" />
      </span>
      post text
    </li>
  );
};

export default Post;
