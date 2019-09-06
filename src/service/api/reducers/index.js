import { combineReducers } from 'redux';
import news from './newsReducers';

export default combineReducers({
  news: news
});