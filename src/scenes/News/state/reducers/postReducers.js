import { GET_POSTS, LOADING_POSTS, SEARCH_SONGS } from '../actions/types';

const initialState = {
  posts: [],
  loading: false,
  hasMore: true,
}
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_POSTS:
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
    case SEARCH_SONGS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      }
    default:
      return state;
  }
}