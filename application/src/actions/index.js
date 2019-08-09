import axios from 'axios';
import history from '../history';

export const RECEIVE_ARTICLES = 'GET_ARTICLES';
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';

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

export const addArticle = ({ title, content }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}`, {title, content})
      .then(response => {
        let data = response.data;
        dispatch({type: ADD_ARTICLE, payload: {id: data.id, title: data.title, content: data.content}})
      })
      .then(() => {
        history.push("/articles")
      })
      .catch(error => { throw(error) });
  };
};

export const getArticle = (id) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/${id}`)
      .then(response => {
        dispatch({type: RECEIVE_ARTICLE, article: response.data});
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const deleteArticle = (id) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}`)
      .then(response => {
        dispatch({type: REMOVE_ARTICLE, payload: {id}})
      })
      .then(() => {
        history.push("/articles")
      })
      .catch(error => {
        throw(error);
      });
  };
};
