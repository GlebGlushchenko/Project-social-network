import React from 'react'
import { Field, reduxForm } from 'redux-form'

const AddPostForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="profile__control-post">
        <Field
          name={'inputPostText'}
          component={'input'}
          className="profile__post-input"
          placeholder="enter post text..."
          type="text"
        />
        <button type="submit" className="profile__post-btn">
          .Post
        </button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'addPostForm' })(AddPostForm)
