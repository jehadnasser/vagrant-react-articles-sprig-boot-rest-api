import axios from 'axios';

export const RECEIVE_ARTICLES = 'GET_ARTICLES';

const apiUrl = process.env.REACT_APP_ARTICLES_API_URL;

export const getArticles = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}`)
      .then(response => {
        dispatch({type: RECEIVE_ARTICLES, articles: response.data})
      })
      .catch(error => { throw(error); });
  };
};
