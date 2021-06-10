import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Post from './Post'
import { handlerKeyUp } from '../../../assets/util/handlerKeyUp'
import AddPostForm from '../../Forms/AddPostForm'

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
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className="profile__post">
      <div className="profile__post__title">.Post</div>
      <div className="profile__control-post">
        <AddPostForm onSubmit={onSubmit} />
        {/* <input
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
        </button> */}
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
// const AddPostForm = ({ handleSubmit }) => {
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="profile__post__title">.Post</div>
//       <div className="profile__control-post">
//         <Field
//           component={'input'}
//           className="profile__post-input"
//           placeholder="enter post text..."
//           type="text"
//         />
//         <button type="submit" className="profile__post-btn">
//           Post
//         </button>
//       </div>
//     </form>
//   )
// }

// export default reduxForm({ form: 'addPostForm' })(AddPostForm)

export default ProfilePost
