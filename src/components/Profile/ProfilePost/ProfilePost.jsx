import React from 'react';
import Post from './Post';

const ProfilePost = ({ postText, newPostText, addPost, changePostText, removePost }) => {
  const newPostTextRef = React.useRef();

  const onAddPost = () => {
    let text = newPostTextRef.current.value;
    if (text) {
      addPost(text);
    } else alert('ENTER TEXT');
  };

  const onChangeTextPost = () => {
    changePostText(newPostTextRef.current.value.trim());
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
              <Post removePost={removePost} message={post.text} index={index} key={index} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePost;
