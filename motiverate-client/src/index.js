import React from 'react';
import { render } from 'react-dom'
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import { 
  createStore, 
  applyMiddleware, 
  compose,
  combineReducers 
} from 'redux'
import { usersReducer } from './reducers/usersReducer'
import { goalsReducer } from './reducers/goalsReducer'
import { updatesReducer } from './reducers/updatesReducer'
import thunk from 'redux-thunk';
import Root from './Root'




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


  const store = createStore(
    combineReducers({
      users: usersReducer,
      goals: goalsReducer,
      updates: updatesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );




render(<Root store={store}/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
