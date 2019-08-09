import axios from 'axios';
import history from '../history';

export const RECEIVE_ARTICLES = 'GET_ARTICLES';
export const ADD_ARTICLE = 'ADD_ARTICLE';

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
