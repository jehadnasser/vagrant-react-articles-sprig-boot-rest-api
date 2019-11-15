import { combineReducers } from 'redux';
import articles from './articlesReducer';
import article from './articleReducer';
import version from './apiVersionReducer';

export default combineReducers({
  articles: articles,
  article: article,
  version: version,
});
