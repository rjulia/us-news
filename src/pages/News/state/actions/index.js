// index.js

import { GET_POSTS, LOADING_POSTS, SEARCH_POSTS, CLEAN_POSTS } from './types';
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

export const searchPosts = (posts) => {
  return {
    type: SEARCH_POSTS,
    payload: posts.articles
  }
};

export const cleanPost = () => {
  return {
    type: CLEAN_POSTS
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

export const searchAllPosts = query => dispatch => {
  dispatch(setPostLoading());
  if (query === '') {
    dispatch(cleanPost())
    dispatch(getAllPosts(1))
  } else {
    axios
      .get(url + `&q=${query}&pageSize=10&page=1}`)
      .then(res => {
        dispatch(searchPosts(res.data))
      })
      .catch(error => {
        dispatch({
          type: SEARCH_POSTS,
          payload: null
        })
      });
  }
};


export const setPostLoading = () => {
  return {
    type: LOADING_POSTS
  };
};