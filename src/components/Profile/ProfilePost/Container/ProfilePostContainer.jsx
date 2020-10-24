import { addPostAC, removePostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

import ProfilePost from '../ProfilePost';

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    postText: state.profilePage.postText,
  };
};
const mapStateToDispatch = (dispatch) => {
  return {
    changePostText: (text) => {
      dispatch(updateNewPostTextAC(text));
    },
    addPost: (text) => {
      dispatch(addPostAC(text));
    },
    removePost: (index) => {
      dispatch(removePostAC(index));
    },
  };
};
const ProfilePostContainer = connect(mapStateToProps, mapStateToDispatch)(ProfilePost);

export default ProfilePostContainer;
