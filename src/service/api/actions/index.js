// index.js

import { FETCH_POST, IS_LOADING } from './types';
import axios from 'axios';
import { config } from '../../../config/keys'

const apiUrl = config.apiUri;





export const getPosts = (posts) => {
  return {
    type: FETCH_POST,
    posts
  }
};

export const getAllPosts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        console.log(response)
        dispatch(getPosts(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};