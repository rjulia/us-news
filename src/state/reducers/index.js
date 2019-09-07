import { combineReducers } from 'redux';
import posts from '../../scenes/News/state/reducers/postReducers';

export default combineReducers({
  posts: posts
});