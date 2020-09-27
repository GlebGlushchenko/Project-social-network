import React from 'react';
import Post from '../ProfilePost/Post';

const ProfilePost = () => {
  return (
    <div className="profile__post">
      <div className="profile__post__title">Post</div>
      <div className="profile__control-post">
        <input className="profile__post-input" placeholder="enter post text..." type="text" />
        <button className="profile__post-btn">Post</button>
      </div>
      <div className="profile__post-wrapper">
        <ul className="profile__post-list">
          <Post message="Hi how are you?" />
          <Post message="Its my first post" />
        </ul>
      </div>
    </div>
  );
};

export default ProfilePost;
