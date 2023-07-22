import { SET_POSTS , SET_ERROR } from "./actionType";

const initialState = {
  posts: [],
  error: null
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
      case SET_ERROR:
        return {
          ...state,
          error: action.payload,
        };

    default:
      return state;
  }
};

export default postReducer;
