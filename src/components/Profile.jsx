import React from 'react';
import userAvatar from '../assets/img/user.png';
import Post from './Post';

const Profile = () => {
  return (
    <div className="profile__wrapper">
      <div className="container">
        <div className="profile__content__wrapper">
          <div className="profile__content">
            <div className="avatar">
              <img width="150px" src={userAvatar} alt="" />
            </div>
            <h2 className="profile__logo">Глеб</h2>

            <div className="description">
              <ul className="description__list">
                <li className="description__list-item">
                  Город: <b>Петрозаводск &#127747;</b>
                </li>
                <li className="description__list-item">
                  День рождение: <b>29/09/1995</b>
                </li>
                <li className="description__list-item">Прочее: ...</li>
              </ul>
            </div>
          </div>
          <div className="profile__post">
            <div className="profile__post__title">Post</div>
            <div className="control__post">
              <input className="profile__post-input" placeholder="enter post text..." type="text" />
              <button className="profile__post-btn">Post</button>
            </div>
            <div className="profile__post-wrapper">
              <ul className="profile__post-list">
                <Post />
                <Post />
                <Post />
                <Post />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
