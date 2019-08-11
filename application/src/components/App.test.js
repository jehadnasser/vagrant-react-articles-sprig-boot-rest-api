import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import '../stylesheets/index.css';
import rootReducer from '../reducers';
import { getArticles } from '../actions';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));//, logger));

store.dispatch(getArticles());

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  div);
  ReactDOM.unmountComponentAtNode(div);
});
