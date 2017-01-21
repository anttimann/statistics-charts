import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { rootReducer } from './reducers';
import { App } from './components/app';
import { AppContainer } from 'react-hot-loader';


const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));
const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./components/app', () => {
    unmountComponentAtNode(rootEl);
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          {React.createElement(require('./components/app').App)}
        </Provider>
      </AppContainer>,
      rootEl
    )
  })
};