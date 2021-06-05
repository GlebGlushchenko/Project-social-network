import React from 'react'
import {
  addPostAC,
  removePostAC,
  updateNewPostTextAC,
  addLikeAC,
  removeLikeAC,
} from '../../../redux/profile-reducer'
import { connect } from 'react-redux'

import ProfilePost from '../ProfilePost'

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    postText: state.profilePage.postText,
  }
}
const mapDispathcToProps = (dispatch) => {
  return {
    changePostText: (text) => {
      dispatch(updateNewPostTextAC(text))
    },
    addPost: (text) => {
      dispatch(addPostAC(text))
    },
    removePost: (index) => {
      dispatch(removePostAC(index))
    },
    addLike: (id) => {
      dispatch(addLikeAC(id))
    },
    removeLike: (id) => {
      dispatch(removeLikeAC(id))
    },
  }
}
const ProfilePostContainer = connect(mapStateToProps, mapDispathcToProps)(ProfilePost)

export default ProfilePostContainer
