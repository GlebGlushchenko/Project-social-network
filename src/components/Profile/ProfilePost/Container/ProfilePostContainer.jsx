import React from 'react';
import { addPostAC, removePostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import ProfilePost from '../ProfilePost';

const ProfilePostContainer = ({ store }) => {
  const state = store.getState();

  const addPost = (text) => {
    store.dispatch(addPostAC(text));
  };

  const changePostText = (text) => {
    store.dispatch(updateNewPostTextAC(text));
  };

  const removePost = (index) => {
    store.dispatch(removePostAC(index));
  };
  return (
    <ProfilePost
      removePost={removePost}
      changePostText={changePostText}
      addPost={addPost}
      newPostText={state.profilePage.newPostText}
      postText={state.profilePage.postText}
    />
  );
};

export default ProfilePostContainer;
