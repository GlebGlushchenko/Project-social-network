const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const REMOVE_POST = 'REMOVE-POST';
let postId = 6;

const initialState = {
  postText: [
    { id: 1, text: 'Hi' },
    { id: 2, text: 'Wellcome' },
    { id: 3, text: 'lorem ipsum' },
    { id: 4, text: 'Lorem Ipsum has been' },
    { id: 5, text: 'Bye' },
    { id: 6, text: 'lorem ipsum' },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        postText: [...state.postText, { id: postId + 1, text: action.textPost }],
        newPostText: '',
      };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    case REMOVE_POST:
      return {
        postText: [
          ...state.postText.filter((_, curId) => {
            if (action.index !== curId) {
              return true;
            }
            return false;
          }),
        ],
      };

    default:
      return state;
  }
};

export const addPostAC = (textPost) => ({ type: ADD_POST, textPost });
export const updateNewPostTextAC = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText });
export const removePostAC = (index) => ({ type: REMOVE_POST, index });

export default profileReducer;
