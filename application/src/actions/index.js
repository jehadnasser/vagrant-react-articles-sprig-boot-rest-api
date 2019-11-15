import axios from 'axios';
import history from '../history';

export const RECEIVE_API_VERSION = 'GET_API_VERSION';
export const RECEIVE_ARTICLES = 'GET_ARTICLES';
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const REPLACE_ARTICLE = 'REPLACE_ARTICLE';

const apiUrl = process.env.REACT_APP_ARTICLES_API_URL;
const apiArticleEndPoint = apiUrl + '/articles';
const apiVersionEndPoint = apiUrl + '/version';

export const getApiVersion = () => {
  return (dispatch) => {
    return axios.get(`${apiVersionEndPoint}`)
      .then(response => {
        dispatch({type: RECEIVE_API_VERSION, version: response.data})
      })
      .catch(error => { throw(error); });
  };
};

export const getArticles = () => {
  return (dispatch) => {
    return axios.get(`${apiArticleEndPoint}`)
      .then(response => {
        dispatch({type: RECEIVE_ARTICLES, articles: response.data})
      })
      .catch(error => { throw(error); });
  };
};

export const addArticle = ({ title, content }) => {
  return (dispatch) => {
    return axios.post(`${apiArticleEndPoint}`, {title, content})
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
    return axios.get(`${apiArticleEndPoint}/${id}`)
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
    return axios.delete(`${apiArticleEndPoint}/${id}`)
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

export const updateArticle = (article) => {
  const articleId = article.id;
  return (dispatch) => {
    return axios.patch(`${apiArticleEndPoint}/${article.id}`, {title: article.title, content: article.content})
      .then(response => {
        const data = response.data;
        dispatch({type: UPDATE_ARTICLE, payload: {id: data.id, title: data.title, content: data.content}})
        dispatch({type: REPLACE_ARTICLE, payload: {id: data.id, title: data.title, content: data.content}})
      })
      .then(() => {
        history.push(`/articles/${articleId}`)
      })
      .catch(error => { throw(error) });
  };
};
