import React from 'react'
import Post from './Post'
import { handlerKeyUp } from '../../../assets/util/handlerKeyUp'

const ProfilePost = ({
  postText,
  newPostText,
  addPost,
  changePostText,
  removePost,
  addLike,
  removeLike,
}) => {
  const newPostTextRef = React.useRef()

  const onAddPost = () => {
    let text = newPostTextRef.current.value
    if (text) {
      addPost(text)
    } else alert('ENTER TEXT')
  }

  const onChangeTextPost = () => {
    changePostText(newPostTextRef.current.value.trim())
  }

  return (
    <div className="profile__post">
      <div className="profile__post__title">.Post</div>
      <div className="profile__control-post">
        <input
          onKeyUp={(e) => handlerKeyUp(e, onAddPost)}
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
              <Post
                removeLike={removeLike}
                addLike={addLike}
                removePost={removePost}
                message={post.text}
                like={post.like}
                index={index}
                key={index}
                id={post.id}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default ProfilePost
