const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        postText: [...state.postText, { text: action.textPost }],
        newPostText: '',
      };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };

    default:
      return state;
  }
};

export const addPostAC = (textPost) => ({ type: ADD_POST, textPost });
export const updateNewPostTextAC = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText });

export default profileReducer;
