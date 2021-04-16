import React from 'react'
import userAvatar from '../../../assets/img/user.png'
import cross from '../../../assets/img/cross.png'
import { LikeSvg } from '../../../assets/util/LikeSvg'
const Post = ({ message, removePost, index, like, addLike, id, removeLike }) => {
  const onRemovePost = () => {
    removePost(index)
  }

  const onAddlike = () => {
    addLike(id)
  }

  const onRemoveLike = () => {
    removeLike(id)
  }

  return (
    <li className="profile__post-item">
      <span className="profile__post-avatar">
        <img width="40px" src={userAvatar} alt="" />
      </span>

      <span className="profile__post-text">{message}</span>
      <span onClick={onRemovePost} className="cross__wrapper">
        <img className="crossDelete" src={cross} alt="Cross" />
      </span>

      <div className="like__wrapper">
        <LikeSvg like={like} onAddlike={onAddlike} onRemoveLike={onRemoveLike} />
        {like}
      </div>
    </li>
  )
}

export default Post
