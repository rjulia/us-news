// index.js

import { GET_POSTS, POST_LOADING } from './types';
import axios from 'axios';
import { config } from '../../../../config/keys'
import moment from 'moment';

const fromDate = moment().subtract(15, 'days').format();
const media = 'washingtonpost.com,nytimes.com';
const apiUrl = config.apiUri;
const apiKey = config.apiKey
const sortBy = 'publishedAt'
const url = `${apiUrl}?domains=${media}&from=${fromDate}&sortBy=${sortBy}&apiKey=${apiKey}`;


export const loadPosts = (posts) => {
  return {
    type: GET_POSTS,
    payload: posts.articles
  }
};


export const getAllPosts = numberPage => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(url + `&pageSize=10&page=${numberPage}`)
    .then(res => {
      dispatch(loadPosts(res.data))
    })
    .catch(error => {
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    });

};


export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};