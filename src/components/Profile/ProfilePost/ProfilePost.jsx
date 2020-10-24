import React from 'react';
import Post from './Post';
import { addPostAC, updateNewPostTextAC } from '../../redux/profile-reducer';

const ProfilePost = ({ postText, newPostText, dispatch }) => {
  const newPostTextRef = React.useRef();

  const onAddPost = () => {
    let text = newPostTextRef.current.value;
    if (text) {
      dispatch(addPostAC(text));
    } else alert('ENTER TEXT');
  };

  const onChangeTextPost = () => {
    dispatch(updateNewPostTextAC(newPostTextRef.current.value.trim()));
  };

  const handlerKeyUp = (e) => {
    if (e.keyCode === 13) {
      onAddPost();
    }
  };

  return (
    <div className="profile__post">
      <div className="profile__post__title">.Post</div>
      <div className="profile__control-post">
        <input
          onKeyUp={handlerKeyUp}
          value={newPostText}
          onChange={onChangeTextPost}
          ref={newPostTextRef}
          className="profile__post-input"
          placeholder="enter post text..."
          type="text"
        />
        <button onClick={onAddPost} className="profile__post-btn">
          Post
        </button>
      </div>
      <div className="profile__post-wrapper">
        <ul className="profile__post-list">
          {postText.length === 0 ? (
            <div className="noPostText">No Post</div>
          ) : (
            postText.map((post, index) => (
              <Post dispatch={dispatch} message={post.text} index={index} key={index} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePost;
