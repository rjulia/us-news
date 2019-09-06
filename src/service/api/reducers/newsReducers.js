import { FETCH_POST } from '../actions/types';

export default function newsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_POST:
      return action.news;
    default:
      return state;
  }
}