// index.js

import { FETCH_POST } from './types';
import axios from 'axios';
import { config } from '../../../config/keys'

const apiUrl = config.apiUri;





export const getPosts = (news) => {
  return {
    type: FETCH_POST,
    news
  }
};

export const getAllPosts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(getPosts(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};