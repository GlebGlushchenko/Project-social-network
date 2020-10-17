import React from 'react';
import Post from '../ProfilePost/Post';

const ProfilePost = () => {
  const [postText, setPostText] = React.useState([
    { text: 'Hi how are you?', id: 1 },
    { text: 'Its my first post', id: 2 },
    { text: 'Hi', id: 3 },
    { text: 'Good bye', id: 4 },
  ]);

  const [textPost, setTextPost] = React.useState();

  const changePost = (event) => {
    const val = event.target.value;
    setTextPost(val.trim());
  };

  const addPost = () => {
    if (textPost) {
      setPostText((prevState) => [...prevState, { text: textPost }]);
      setTextPost('');
    } else {
      alert('Error');
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      addPost();
    }
  };

  const removePost = (index) => {
    setPostText((prevState) =>
      prevState.filter((_, curIndex) => {
        if (index !== curIndex) {
          return true;
        }
        return false;
      }),
    );
  };

  return (
    <div className="profile__post">
      <div className="profile__post__title">.Post</div>
      <div className="profile__control-post">
        <input
          onKeyUp={handleKeyUp}
          value={textPost}
          onChange={changePost}
          className="profile__post-input"
          placeholder="enter post text..."
          type="text"
        />
        <button onClick={addPost} className="profile__post-btn">
          Post
        </button>
      </div>
      <div className="profile__post-wrapper">
        <ul className="profile__post-list">
          {postText.map((post, index) => (
            <Post removePost={removePost} message={post.text} index={index} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePost;
