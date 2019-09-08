import { combineReducers } from 'redux';
import posts from '../../pages/News/state/reducers/postReducers';

export default combineReducers({
  posts: posts
});