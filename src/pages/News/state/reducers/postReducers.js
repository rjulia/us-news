import { GET_POSTS, LOADING_POSTS, SEARCH_POSTS, CLEAN_POSTS } from '../actions/types';

const initialState = {
  posts: [],
  loading: false,
  hasMore: true,
  noResult: false,
  isSearching: false
}
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_POSTS:
      return {
        ...state,
        loading: true
      };
    case CLEAN_POSTS:
      return {
        ...state,
        posts: []
      }
    case SEARCH_POSTS:
      console.log('hello songs serach')
      return {
        ...state,
        posts: action.payload,
        noResult: action.payload && action.payload.length === 0 ? true : false,
        isSearching: action.payload ? true : false,
        loading: false
      }
    case GET_POSTS:
      console.log('hello songs Get')
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false,
        noResult: false,
        isSearching: false
      };
    default:
      return state;
  }
}