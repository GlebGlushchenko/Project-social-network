const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const REMOVE_POST = 'REMOVE-POST';
const ADD_LIKE = 'ADD_LIKE';
const REMOVE_LIKE = 'REMOVE_LIKE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let postId = 6;

const initialState = {
  postText: [
    { id: 1, text: 'Hi', like: 0 },
    { id: 2, text: 'Wellcome', like: 0 },
    { id: 3, text: 'lorem ipsum', like: 0 },
    { id: 4, text: 'Lorem Ipsum has been', like: 0 },
    { id: 5, text: 'Bye', like: 0 },
    { id: 6, text: 'lorem ipsum', like: 0 },
  ],
  newPostText: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        postText: [...state.postText, { id: postId + 1, text: action.textPost, like: 0 }],
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
    case ADD_LIKE:
      return {
        ...state,
        postText: [
          ...state.postText.map((post) =>
            post.id === action.id ? { ...post, like: post.like + 1 } : post,
          ),
        ],
      };
    case REMOVE_LIKE:
      return {
        ...state,
        postText: [
          ...state.postText.map((post) =>
            post.id === action.id ? { ...post, like: post.like - 1 } : post,
          ),
        ],
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profileData };

    default:
      return state;
  }
};

export const addPostAC = (textPost) => ({ type: ADD_POST, textPost });
export const updateNewPostTextAC = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText });
export const removePostAC = (index) => ({ type: REMOVE_POST, index });
export const addLikeAC = (id) => ({ type: ADD_LIKE, id });
export const removeLikeAC = (id) => ({ type: REMOVE_LIKE, id });
export const setUserProfile = (profileData) => ({ type: SET_USER_PROFILE, profileData });

export default profileReducer;
