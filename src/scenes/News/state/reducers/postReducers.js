import { GET_POSTS, POST_LOADING } from '../actions/types';

const initialState = {
  posts: [],
  loading: false,
  hasMore: true,
}
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false
      };
    default:
      return state;
  }
}